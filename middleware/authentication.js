export default function (hoge) {
  // ユーザーが認証されていないとき
  console.debug('middleware authentication.js: ', hoge)
  if (hoge.store.state.authenticated) {
    return hoge.redirect('/login')
  }
}