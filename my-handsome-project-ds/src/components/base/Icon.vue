<template>
  <component v-if="componentName" :is="componentName" />
</template>

<script>
import SvgIcons from './icons'

export default {
  name: 'Icon',
  data () {
    return {
      icons: SvgIcons
    }
  },
  props: {
    type: String
  },
  computed: {
    componentName () {
      if (!SvgIcons[this.type]) return false
      return SvgIcons[this.type]
    }
  }
}
</script>
