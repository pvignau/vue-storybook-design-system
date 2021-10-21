<template>
  <div class="header shadow shadow--low" :class="{'header--with-title': title !== '' }">
    <div class="header__content">
      <div class="header__action-left">
        <slot name="action-left"></slot>
      </div>
      <div class="header__title">
        <Logo />
        <p v-if="title" class="text__md">{{ title }}</p>
      </div>
      <div class="header__action-right">
        <slot name="action-right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '../../assets/logo.svg'

export default {
  name: 'Header',
  components: {
    Logo
  },
  props: {
    title: {
      required: false,
      type: String,
      default: ''
    }
  },
  created () {
    console.log(Logo)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../css/app.scss";

.header {
  width: 100%;
  height: 60px;
  color: $color-on-surface;
  background-color: $color-surface;
  border-radius: $radius-xxs-radius;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
  }
  &--with-title {
    align-items: baseline;

    & .header__title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    & .logo {
      max-width: 24px;
    }
  }
}
</style>
