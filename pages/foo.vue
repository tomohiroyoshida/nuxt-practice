<template>
<div>
  <nuxt-child keep-alive />
  <nuxt-child keep-alive name="top" />
  
</div>
</template>
<script lang="ts">
import {  defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'foo',

  setup() {}
})
</script>