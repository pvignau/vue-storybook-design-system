<template>
  <span :class="'icon-' + icon"></span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../css/base/_icons.scss";
</style>
