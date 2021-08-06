<template>
  <div>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan lacus urna, quis facilisis libero feugiat vel. Aenean id posuere nulla. Nullam arcu orci, rhoncus placerat volutpat et, condimentum at eros. Nunc tincidunt efficitur diam, ut tempus mi viverra ut. Nullam commodo ex a nulla laoreet, at lobortis ipsum accumsan. Donec eu sapien quis libero molestie suscipit ac ac turpis. Aenean imperdiet metus erat, ut faucibus leo ultricies hendrerit. Nunc ornare ac nulla vitae fermentum. Integer interdum egestas lorem quis tincidunt. Aliquam malesuada, lacus a efficitur dignissim, felis mi tempus dui, eu luctus nibh velit vel orci. Duis vitae dapibus ligula, at condimentum lorem. Vivamus blandit, leo sit amet molestie rutrum, massa tortor consequat magna, euismod tincidunt metus quam nec mi. In gravida lorem a tellus convallis tincidunt.</p>
    <p class="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan lacus urna, quis facilisis libero feugiat vel. Aenean id posuere nulla. Nullam arcu orci, rhoncus placerat volutpat et, condimentum at eros. Nunc tincidunt efficitur diam, ut tempus mi viverra ut. Nullam commodo ex a nulla laoreet, at lobortis ipsum accumsan. Donec eu sapien quis libero molestie suscipit ac ac turpis. Aenean imperdiet metus erat, ut faucibus leo ultricies hendrerit. Nunc ornare ac nulla vitae fermentum. Integer interdum egestas lorem quis tincidunt. Aliquam malesuada, lacus a efficitur dignissim, felis mi tempus dui, eu luctus nibh velit vel orci. Duis vitae dapibus ligula, at condimentum lorem. Vivamus blandit, leo sit amet molestie rutrum, massa tortor consequat magna, euismod tincidunt metus quam nec mi. In gravida lorem a tellus convallis tincidunt.</p>
    <p class="smaller">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas accumsan lacus urna, quis facilisis libero feugiat vel. Aenean id posuere nulla. Nullam arcu orci, rhoncus placerat volutpat et, condimentum at eros. Nunc tincidunt efficitur diam, ut tempus mi viverra ut. Nullam commodo ex a nulla laoreet, at lobortis ipsum accumsan. Donec eu sapien quis libero molestie suscipit ac ac turpis. Aenean imperdiet metus erat, ut faucibus leo ultricies hendrerit. Nunc ornare ac nulla vitae fermentum. Integer interdum egestas lorem quis tincidunt. Aliquam malesuada, lacus a efficitur dignissim, felis mi tempus dui, eu luctus nibh velit vel orci. Duis vitae dapibus ligula, at condimentum lorem. Vivamus blandit, leo sit amet molestie rutrum, massa tortor consequat magna, euismod tincidunt metus quam nec mi. In gravida lorem a tellus convallis tincidunt.</p>
  </div>
</template>

<script>
import { typography } from 'tokens/dist/index'

export default {
  name: 'Typography',
  props: {
    msg: String
  },
  data () {
    return {
      typography: typography
    }
  },
  created () {
    console.log(this.typography.headline2FontStretch)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "~tokens/dist/sass/typography.scss";

  h1 {
    font-size: $headline1FontSize;
    text-decoration: $headline1TextDecoration;
    font-family: $headline1FontFamily;
    font-weight: $headline1FontWeight;
    font-style: $headline1FontStyle;
    font-stretch: $headline1FontStretch;
    letter-spacing: $headline1LetterSpacing;
    line-height: $headline1LineHeight;
    text-indent: $headline1ParagraphIndent;
    border-spacing: $headline1ParagraphSpacing;
    // $headline1FontStyleOld;
    // $headline1TextCase;
  }
  h2 {
    font-size: $headline2FontSize;
    text-decoration: $headline2TextDecoration;
    font-family: $headline2FontFamily;
    font-weight: $headline2FontWeight;
    font-style: $headline2FontStyle;
    font-stretch: $headline2FontStretch;
    letter-spacing: $headline2LetterSpacing;
    line-height: $headline2LineHeight;
    text-indent: $headline2ParagraphIndent;
    border-spacing: $headline2ParagraphSpacing;
    // $headline2FontStyleOld;
    // $headline2TextCase;
  }
  h3 {
    font-size: $headline3FontSize;
    text-decoration: $headline3TextDecoration;
    font-family: $headline3FontFamily;
    font-weight: $headline3FontWeight;
    font-style: $headline3FontStyle;
    font-stretch: $headline3FontStretch;
    letter-spacing: $headline3LetterSpacing;
    line-height: $headline3LineHeight;
    text-indent: $headline3ParagraphIndent;
    border-spacing: $headline3ParagraphSpacing;
    // $headline3FontStyleOld;
    // $headline3TextCase;
  }
  h4 {
    font-size: $headline4FontSize;
    text-decoration: $headline4TextDecoration;
    font-family: $headline4FontFamily;
    font-weight: $headline4FontWeight;
    font-style: $headline4FontStyle;
    font-stretch: $headline4FontStretch;
    letter-spacing: $headline4LetterSpacing;
    line-height: $headline4LineHeight;
    text-indent: $headline4ParagraphIndent;
    border-spacing: $headline4ParagraphSpacing;
    // $headline4FontStyleOld;
    // $headline4TextCase;
  }
  h5 {
    font-size: $headline5FontSize;
    text-decoration: $headline5TextDecoration;
    font-family: $headline5FontFamily;
    font-weight: $headline5FontWeight;
    font-style: $headline5FontStyle;
    font-stretch: $headline5FontStretch;
    letter-spacing: $headline5LetterSpacing;
    line-height: $headline5LineHeight;
    text-indent: $headline5ParagraphIndent;
    border-spacing: $headline5ParagraphSpacing;
    // $headline5FontStyleOld;
    // $headline5TextCase;
  }
  h6 {
    font-size: $headline6FontSize;
    text-decoration: $headline6TextDecoration;
    font-family: $headline6FontFamily;
    font-weight: $headline6FontWeight;
    font-style: $headline6FontStyle;
    font-stretch: $headline6FontStretch;
    letter-spacing: $headline6LetterSpacing;
    line-height: $headline6LineHeight;
    text-indent: $headline6ParagraphIndent;
    border-spacing: $headline6ParagraphSpacing;
    // $headline6FontStyleOld;
    // $headline6TextCase;
  }
  p {
    font-size: $paragraph1FontSize;
    text-decoration: $paragraph1TextDecoration;
    font-family: $paragraph1FontFamily;
    font-weight: $paragraph1FontWeight;
    font-style: $paragraph1FontStyle;
    font-stretch: $paragraph1FontStretch;
    letter-spacing: $paragraph1LetterSpacing;
    line-height: $paragraph1LineHeight;
    text-indent: $paragraph1ParagraphIndent;
    border-spacing: $paragraph1ParagraphSpacing;
  }
  p.small{
    font-size: $paragraph2FontSize;
    text-decoration: $paragraph2TextDecoration;
    font-family: $paragraph2FontFamily;
    font-weight: $paragraph2FontWeight;
    font-style: $paragraph2FontStyle;
    font-stretch: $paragraph2FontStretch;
    letter-spacing: $paragraph2LetterSpacing;
    line-height: $paragraph2LineHeight;
    text-indent: $paragraph2ParagraphIndent;
    border-spacing: $paragraph2ParagraphSpacing;
  }
  p.smaller {
    font-size: $paragraph3FontSize;
    text-decoration: $paragraph3TextDecoration;
    font-family: $paragraph3FontFamily;
    font-weight: $paragraph3FontWeight;
    font-style: $paragraph3FontStyle;
    font-stretch: $paragraph3FontStretch;
    letter-spacing: $paragraph3LetterSpacing;
    line-height: $paragraph3LineHeight;
    text-indent: $paragraph3ParagraphIndent;
    border-spacing: $paragraph3ParagraphSpacing;
  }
</style>
