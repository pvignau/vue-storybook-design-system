import MyButton from './Button';

export default {
  title: 'Base/Button',
  component: MyButton
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  template:
      `<my-button v-bind="$props">
          <template v-slot>${args.value}</template>
        </my-button>`,
});

const argTypes = {
  value: { category: 'Slots', control: 'text' },
  type: { control: 'select', options: ['default', 'secondary', 'tertiary'] }
}

export const Default = Template.bind({});
Default.argTypes = argTypes;
Default.args = {
  value: 'Primary',
  type: 'primary'
};

export const Secondary = Template.bind({});
Secondary.argTypes = argTypes;
Secondary.args = {
  value: 'Secondary',
  type: 'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.argTypes = argTypes;
Tertiary.args = {
  value: "Tertiary",
  type: 'tertiary'
};
