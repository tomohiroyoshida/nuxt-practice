<template>
  <div
    class="container"
  >
    <div>
      <Logo />
      <h1
        class="title"
      >
        sample-apps
      </h1>
      <div
        class="links"
      >
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'index',

  asyncData(context) {
    console.debug('asyncData context:', context)
  },
  fetch(context) {
    console.debug('fetch: ', context)
  },
  head() {
    return {
      title: 'index.vueでtitleをつけました。'
    }
  },
  // key(route) {
  //   console.debug('key route: ', route)
  //   return route
  // },
  layout(context) {
    console.debug('lauout context: ', context)
    return 'blog'
  },
  loading: false, // デフォルトはtrue
  middleware: ['authentication', 'foo'], // 名前付きmiddlewareを使う場合. なしでもいける. 複数あるときは配列で使う
  scrollToTop: true,
  transition: {
    type: 'transition',
    name: 'test',
    mode: '',
    enterClass: 'foo',
    leaveClass: 'bar',
    beforeEnter(el) {
      console.debug('afterLeave', el)
    }
  },
  validate({ params }) {
    // return /^\d+$/.test(params.id)
    console.debug('validate')
    return true
  },



  setup(props, context ){
    console.debug('setup props: ', props) 
    console.debug('setup context: ', context)
    
    
    return {}
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
