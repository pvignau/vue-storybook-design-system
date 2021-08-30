<template>
  <div class="tab-bar">
    <ul class="icons">
      <li><icon icon="home" /></li>
      <li><icon icon="search" /></li>
      <li><Btn type="funky"><icon icon="plus" /></Btn></li>
      <li><icon icon="chat" /></li>
      <li><icon icon="person" /></li>
    </ul>
    <p class="label smaller">Lorem Ipsum</p>
  </div>
</template>

<script>
import Icon from './base/Icon'
import Btn from './base/Button'

export default {
  name: 'TabBar',
  components: {
    Btn,
    Icon
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../css/base/_typography.scss";
@import "~@mhp/tokens/dist/scss/_colors.scss";

.tab-bar {
  border-top: #E5E5E5 solid 2px;
}

.tab-bar .icons {
  list-style-type: none;
  align-items: center;
  justify-content: space-between;
  display: flex;
  padding: 0;
  margin: 10px;
  font-weight: bold;
}

.tab-bar .label {
  display: flex;
  justify-content: center;
}
</style>
