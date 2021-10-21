<template>
  <button :class="[type, rounded ? 'rounded' : '']"><slot></slot></button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    type: {
      required: false,
      type: String,
      default: 'default'
    },
    rounded: {
      required: false,
      type: Boolean,
      default: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@mhp/tokens/dist/scss/_colors.scss";
@import "~@mhp/tokens/dist/scss/_radii.scss";
@import "~@mhp/tokens/dist/scss/_typography.scss";
@import "~@mhp/tokens/dist/scss/_borders.scss";

$height: 48px; // Should come from tokens
button {
  height: $height;
  min-width: $height; // At min square or round
  font-family: $font-text-base-bold-font-family, 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: $font-text-base-bold-font-size;
  padding: 12px;
  border: 0;
  cursor: pointer;
  display: inline-block;
  vertical-align: text-top;
  line-height: 1;
  border-radius: $radius-sm-radius;
  color: $color-on-primary;
  background: $color-primary;
}
.secondary {
  color: $color-on-surface;
  background: $color-surface;
  border: $borders-single-stroke solid $borders-single-stroke-weight;
  padding: 10px - $borders-single-stroke-weight*2;
}
.tertiary {
  color: $color-on-surface;
  border: none;
  background: none;
}
.rounded {
  border-radius: $radius-full-radius;
}
</style>
