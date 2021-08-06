<template>
  <div id="app">
    <TabBar/>
  </div>
</template>

<script>
import TabBar from './components/TabBar.vue'

export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style lang="scss">
$color: #2c3e50;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color;
  margin: 60px auto 0 auto;
  width: 375px;
}
</style>
