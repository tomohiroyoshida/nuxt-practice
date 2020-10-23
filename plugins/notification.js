import Vue from 'vue'

Vue.prototype.$notification = (string) =>
  console.log('This is an example', string)
