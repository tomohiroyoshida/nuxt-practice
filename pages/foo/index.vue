<template>
  <div>
    {{ foo }}
    <nuxt-link to="/foo/bar" no-prefetch>barへ飛ぶぞ</nuxt-link>
    <nuxt-link to="/foo/bar" :prefetch="false">barへ飛ぶぞ</nuxt-link>
  </div>
  
</template>
<script lang="ts">
import {  defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'foo',

  setup() {
    const foo = 'foo'

    return {
      foo
    }
  }
})
</script>