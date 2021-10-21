<template>
  <div id="app">
    <my-header title="Incidents non envoyés">
      <template v-slot:action-left><my-button type="tertiary"><icon type="menu"></icon></my-button></template>
      <template v-slot:action-right><my-button type="tertiary"><icon type="help"></icon></my-button></template>
    </my-header>
    <div class="content">
      <card :id="352" state="ongoing" author="Guy Rophoard" date="16/04/2021">
        <template v-slot:default><p class="text__sm">Site concerné, sur une, deux ou plusieurs lignes.</p></template>
        <template v-slot:title>Lorem ipsum dolor sit amet, consecte adipiscing elitictu arcu ante risus elit quis egestas mollis.</template>
        <template v-slot:subtitle>Type d'incident</template>
        <template v-slot:actions>
          <my-button type="secondary">Supprimer</my-button>
          <my-button>Soumettre</my-button>
        </template>
      </card>
      <card :id="352" state="draft" author="Guy Rophoard" date="16/04/2021">
        <template v-slot:default><p class="text__sm">Site concerné, sur une, deux ou plusieurs lignes.</p></template>
        <template v-slot:title>Lorem ipsum dolor sit amet, consecte adipiscing elitictu arcu ante risus elit quis egestas mollis.</template>
        <template v-slot:subtitle>Type d'incident</template>
      </card>
      <card :id="352" state="draft" author="Guy Rophoard" date="16/04/2021">
        <template v-slot:default><p class="text__sm">Site concerné, sur une, deux ou plusieurs lignes.</p></template>
        <template v-slot:title>Lorem ipsum dolor sit amet, consecte adipiscing elitictu arcu ante risus elit quis egestas mollis.</template>
        <template v-slot:subtitle>Type d'incident</template>
        <template v-slot:actions>
          <my-button type="secondary">Supprimer</my-button>
          <my-button>Soumettre</my-button>
        </template>
      </card>
      <card :id="352" state="draft" author="Guy Rophoard" date="16/04/2021">
        <template v-slot:default><p class="text__sm">Site concerné, sur une, deux ou plusieurs lignes.</p></template>
        <template v-slot:title>Lorem ipsum dolor sit amet, consecte adipiscing elitictu arcu ante risus elit quis egestas mollis.</template>
        <template v-slot:subtitle>Type d'incident</template>
      </card>
    </div>
  </div>
</template>

<script>
import {
  Header as MyHeader,
  Button as MyButton,
  Icon,
  Card
} from '@mhp/design-system'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyButton,
    Icon,
    Card
  }
}
</script>

<style lang="scss">
@import "~@mhp/design-system/src/css/app.scss";

#app {
  background-color: $color-background;
  color: $color-on-background;
  overflow: auto;
}

.header {
  position: sticky;
  top: 0;
}
</style>
