<template>
  <div class="card shadow shadow--high">
    <div v-if="state" class="card__state">
      <div class="tag text__md text__md--bold">{{ state[0].toUpperCase() + state.slice(1, state.length) }}</div>
    </div>
    <div v-if="!!$slots.title" class="card__title">
      <p class="text__md text__md--bold"><slot name="title"></slot></p>
    </div>
    <div v-if="!!$slots.subtitle" class="card__subtitle">
      <p class="text__md"><slot name="subtitle"></slot></p>
    </div>
    <div v-if="!!$slots.default" class="card__content">
      <slot></slot>
    </div>
    <div class="card__date">
      <p class="text__sm">{{ date }}</p>
    </div>
    <div class="card__author text__sm">
      <p>Par <span class="text__sm--bold">{{ author }}</span></p>
      <p>INC <span class="text__sm--bold">{{ id }}</span></p>
    </div>
    <div v-if="!!$slots.actions" class="card__actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    state: {
      required: false,
      type: String,
      default: null
    },
    date: {
      required: false,
      type: String
    },
    author: {
      required: false,
      type: String
    },
    id: {
      required: false,
      type: Number
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../css/app.scss";

.card {
  color: $color-on-surface;
  background-color: $color-surface;
  border-radius: $radius-xxs-radius;
  padding: 20px;
  margin: 20px;
  outline: $borders-light-stroke solid $borders-light-stroke-weight;

  &__state .tag {
    height: 19px;
    background: $color-background-lighter;
    color: $color-on-secondary;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 10px;
    padding-right: 10px;
    vertical-align: bottom;
    text-align: center;
    border-radius: $radius-sm-radius;
    width: max-content;
  }

  &__title {
    color: $color-on-surface-lighter;
    padding-top: 20px;
  }
  &__subtitle {
    padding-top: 20px;
  }
  &__content {
    padding-top: 20px;
  }
  &__date {
    color: $color-on-surface-light;
    padding-top: 20px;
  }
  &__author {
    color: $color-on-surface-light;
    padding-top: 5px;
    display: flex;
    justify-content: space-between;
  }
  &__actions {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;

    & button:first-child {
      width: 40%;
    }
    & button:last-child {
      width: 50%;
    }
  }
}
</style>
