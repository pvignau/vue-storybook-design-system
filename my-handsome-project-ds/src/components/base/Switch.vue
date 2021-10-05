<template>
  <label class="switch" :class="{big: size === 'big'}">
    <input type="checkbox" :checked="content" v-on:input="updateValue">
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {
  name: 'Button',
  props: {
    size: {
      required: false,
      type: String,
      default: 'small'
    },
    value: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      content: this.value
    }
  },
  methods: {
    updateValue () {
      this.$emit('input', this.content)
    }
  },
  watch: {
    value (val) {
      this.content = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "~@mhp/tokens/dist/scss/_colors.scss";
@import "~@mhp/tokens/dist/scss/_typography.scss";

.switch {
  position: relative;
  display: inline-block;
  width: 32px;
  height: 16px;

  &.big{
    width: 64px;
    height: 32px;
  }
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $color-grey;
  -webkit-transition: .4s;
  transition: .4s;
}

.switch .slider:before {
  position: absolute;
  content: "";
  height: 12px;
  width: 12px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: transform .4s;
  transition: transform .4s;
}

.switch.big .slider:before {
  height: 24px;
  width: 24px;
  left: 4px;
  bottom: 4px;
}

input:checked + .slider {
  background-color: $color-regular;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

.switch input:checked + .slider:before {
  -webkit-transform: translateX(16px);
  -ms-transform: translateX(16px);
  transform: translateX(16px);
  height: 10px;
  width: 10px;
  border: 1px solid mix($color-greyish-0,$color-greyish-1,60%);
}

.switch.big input:checked + .slider:before {
  -webkit-transform: translateX(32px);
  -ms-transform: translateX(32px);
  transform: translateX(32px);
  height: 22px;
  width: 22px;
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
