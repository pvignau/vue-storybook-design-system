<template>
  <div>
    <h1 class="fat">Title Fat</h1>
    <h1>Title</h1>
    <h2>Subtitle</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan lacus urna, quis facilisis libero feugiat vel. Aenean id posuere nulla. Nullam arcu orci, rhoncus placerat volutpat et, condimentum at eros. Nunc tincidunt efficitur diam, ut tempus mi viverra ut. Nullam commodo ex a nulla laoreet, at lobortis ipsum accumsan. Donec eu sapien quis libero molestie suscipit ac ac turpis. Aenean imperdiet metus erat, ut faucibus leo ultricies hendrerit. Nunc ornare ac nulla vitae fermentum. Integer interdum egestas lorem quis tincidunt. Aliquam malesuada, lacus a efficitur dignissim, felis mi tempus dui, eu luctus nibh velit vel orci. Duis vitae dapibus ligula, at condimentum lorem. Vivamus blandit, leo sit amet molestie rutrum, massa tortor consequat magna, euismod tincidunt metus quam nec mi. In gravida lorem a tellus convallis tincidunt.</p>
    <p class="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan lacus urna, quis facilisis libero feugiat vel. Aenean id posuere nulla. Nullam arcu orci, rhoncus placerat volutpat et, condimentum at eros. Nunc tincidunt efficitur diam, ut tempus mi viverra ut. Nullam commodo ex a nulla laoreet, at lobortis ipsum accumsan. Donec eu sapien quis libero molestie suscipit ac ac turpis. Aenean imperdiet metus erat, ut faucibus leo ultricies hendrerit. Nunc ornare ac nulla vitae fermentum. Integer interdum egestas lorem quis tincidunt. Aliquam malesuada, lacus a efficitur dignissim, felis mi tempus dui, eu luctus nibh velit vel orci. Duis vitae dapibus ligula, at condimentum lorem. Vivamus blandit, leo sit amet molestie rutrum, massa tortor consequat magna, euismod tincidunt metus quam nec mi. In gravida lorem a tellus convallis tincidunt.</p>
    <p class="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan lacus urna, quis facilisis libero feugiat vel. Aenean id posuere nulla. Nullam arcu orci, rhoncus placerat volutpat et, condimentum at eros. Nunc tincidunt efficitur diam, ut tempus mi viverra ut. Nullam commodo ex a nulla laoreet, at lobortis ipsum accumsan. Donec eu sapien quis libero molestie suscipit ac ac turpis. Aenean imperdiet metus erat, ut faucibus leo ultricies hendrerit. Nunc ornare ac nulla vitae fermentum. Integer interdum egestas lorem quis tincidunt. Aliquam malesuada, lacus a efficitur dignissim, felis mi tempus dui, eu luctus nibh velit vel orci. Duis vitae dapibus ligula, at condimentum lorem. Vivamus blandit, leo sit amet molestie rutrum, massa tortor consequat magna, euismod tincidunt metus quam nec mi. In gravida lorem a tellus convallis tincidunt.</p>
    <p class="small-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan lacus urna, quis facilisis libero feugiat vel. Aenean id posuere nulla. Nullam arcu orci, rhoncus placerat volutpat et, condimentum at eros. Nunc tincidunt efficitur diam, ut tempus mi viverra ut. Nullam commodo ex a nulla laoreet, at lobortis ipsum accumsan. Donec eu sapien quis libero molestie suscipit ac ac turpis. Aenean imperdiet metus erat, ut faucibus leo ultricies hendrerit. Nunc ornare ac nulla vitae fermentum. Integer interdum egestas lorem quis tincidunt. Aliquam malesuada, lacus a efficitur dignissim, felis mi tempus dui, eu luctus nibh velit vel orci. Duis vitae dapibus ligula, at condimentum lorem. Vivamus blandit, leo sit amet molestie rutrum, massa tortor consequat magna, euismod tincidunt metus quam nec mi. In gravida lorem a tellus convallis tincidunt.</p>
  </div>
</template>

<script>

export default {
  name: 'Typography',
  props: {
    msg: String
  },
  data () {
    return {}
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../css/base/_typography.scss";
</style>
