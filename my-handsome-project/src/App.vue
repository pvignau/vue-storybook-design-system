<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="actions">
      <TabBar></TabBar>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { TabBar } from '@mhp/design-system'

export default {
  name: 'App',
  components: {
    HelloWorld,
    TabBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.actions {
  width: 375px;
  margin: 60px auto;
}
</style>
