<template>
  <div id="app">
    <Test2fa msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Test2fa from './components/Test2fa.vue'

export default {
  name: 'app',
  components: {
    Test2fa
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
