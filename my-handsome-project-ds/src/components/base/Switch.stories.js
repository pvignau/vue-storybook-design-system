import MySwitch from './Switch';

let model = false;

export default {
  title: 'Base/Switch',
  component: MySwitch
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MySwitch },
  template: `<my-switch v-bind="$props"></my-switch>`,
  watch: {
    value(value) {
      console.log('update', value)
      this.model = value;
    }
  },
});

export const Default = Template.bind({});
Default.argTypes = {
  value: { control: 'boolean' },
  size: { control: 'select', options: ['small', 'big'] }
}
Default.args = {
  value: model,
  size: `small`
};
