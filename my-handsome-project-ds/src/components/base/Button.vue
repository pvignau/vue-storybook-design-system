<template>
  <button :class="type" :value="value"><slot></slot></button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    value: String,
    type: {
      required: false,
      type: String,
      default: 'primary'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@mhp/tokens/dist/scss/_colors.scss";
@import "~@mhp/tokens/dist/scss/_typography.scss";

  button {
    height: 40px;
    min-width: 70px;
    font-family: $font-paragraph-font-family, 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    padding: 12px 24px;
    border: 0;
    cursor: pointer;
    display: inline-block;
    vertical-align: text-top;
    line-height: 1;
    background: $color-regular;
    border-radius: 20px;
    color: $color-regular;
  }

  button:hover {

  }

  .primary {
    background: #333333;
  }
  .secondary {
    color: #333333;
    background: #ffffff;
    border: #666666 solid 2px;
    padding: 10px 22px;
  }
  .funky {
    background: linear-gradient(202.17deg, #FF00D6 8.58%, #FF4D00 91.42%);
  }
</style>
