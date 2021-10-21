import MyHeader from './Header';
import MyButton from '../base/Button'
import MyIcon from '../base/Icon'

export default {
  title: 'UI/Header',
  component: MyHeader
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyHeader, MyButton, MyIcon },
  template:
      `<div style="max-width: 375px;">
        <my-header v-bind="$props">
          <template v-slot:action-left><my-button type="tertiary"><my-icon type="menu"></my-icon></my-button></template>
          <template v-slot:action-right><my-button type="tertiary"><my-icon type="help"></my-icon></my-button></template>
        </my-header>
      </div>`,
});

const argTypes = {
  title: { control: 'text' }
}

export const Default = Template.bind({});
Default.argTypes = argTypes;
Default.parameters = {
  layout:'fullscreen'
}
Default.args = {
  title: 'Déclarer un incident'
};

