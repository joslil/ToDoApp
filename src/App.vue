<template>
  <div id="app">
    <Head/>
    <Body/>
  </div>
</template>

<script>
import Head from './components/views/Head.vue'
import Body from './components/views/Body.vue'

export default {
  name: 'app',
  components: {
    Head,
    Body
  },
  data() {
    return {

    }
  }
}
</script>

<style>
#app {
  font-family: Georgia, 'Times New Roman', Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
