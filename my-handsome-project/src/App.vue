<template>
  <div id="app">
    <my-header>
      <template v-slot:action-left><my-button type="tertiary"><icon type="menu"></icon></my-button></template>
      <template v-slot:action-right><my-button type="tertiary"><icon type="help"></icon></my-button></template>
    </my-header>
  </div>
</template>

<script>
import {
  Header as MyHeader,
  Button as MyButton,
  Icon
} from '@mhp/design-system'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyButton,
    Icon
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
