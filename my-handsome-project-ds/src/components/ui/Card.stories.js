import Card from './Card';
import MyButton from '../base/Button'

export default {
  title: 'UI/Card',
  component: Card
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Card, MyButton },
  parameters:{
    layout:'centered',
  },
  template:
      `<div style="max-width: 375px;">
        <card v-bind="$props">
          <template v-slot:default><p class="text__sm">Site concerné, sur une, deux ou plusieurs lignes.</p></template>
          <template v-slot:title>Lorem ipsum dolor sit amet, consecte adipiscing elitictu arcu ante risus elit quis egestas mollis.</template>
          <template v-slot:subtitle>Type d'incident</template>
          <template v-slot:actions>
            <my-button type="secondary">Supprimer</my-button>
            <my-button>Soumettre</my-button>
          </template>
        </card>
      </div>`,
});

const argTypes = {
  value: { category: 'Slots', control: 'text' },
  state: { control: 'select', options: ['draft', 'ongoing', 'tertiary'] }
}

export const Default = Template.bind({});
Default.argTypes = argTypes;
Default.parameters = {
  layout:'centered'
}
Default.args = {
  id: 352,
  state: 'draft',
  author: 'Guy Rophoard',
  date: '16/04/2021'
};

