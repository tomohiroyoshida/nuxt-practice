import { resolve } from 'path'
import test from 'ava'
import { Nuxt, Builder } from 'nuxt'

// Nuxt.js を初期化し localhost:4000 のリスニングを開始します
test.before('Init Nuxt.js', async (t) => {
  const rootDir = resolve(__dirname, '..')
  let config = {}
  try {
    config = require(resolve(
      rootDir,
      'nuxt.config.js'
    ))
  } catch (e) {
    console.error(e)
  }
  config.rootDir = rootDir // project folder
  config.dev = false // production build
  config.mode = 'universal' // Isomorphic application
  const nuxt = new Nuxt(config)
  t.context.nuxt = nuxt // Nuxt への参照を保持することでテスト終了時にサーバーをクローズすることができます
  await new Builder(nuxt).build()
  nuxt.listen(3000, 'localhost')
})

// 生成された HTML のみをテストする例
test('Route / exists and render HTML', async (t) => {
  const { nuxt } = t.context
  const context = {}
  const { html } = await nuxt.renderRoute(
    '/',
    context
  )
  t.true(
    html.includes(
      '<h1 class="red">Hello world!</h1>'
    )
  )
})

// DOM チェックを経由してテストする例
test('Route / exists and renders HTML with CSS applied', async (t) => {
  const { nuxt } = t.context
  const window = await nuxt.renderAndGetWindow(
    'http://localhost:3000/'
  )
  const element = window.document.querySelector(
    '.red'
  )
  t.not(element, null)
  t.is(element.textContent, 'Hello world!')
})

// Nuxt サーバーをクローズする
test.after('Closing server', (t) => {
  const { nuxt } = t.context
  nuxt.close()
})
