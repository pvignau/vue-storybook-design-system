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
          <template v-if="${'default' in args}" v-slot>${args.default}</template>
        </my-button>`,
});

export const Primary = Template.bind({});
Primary.args = {
  value: "",
  default: `Button`
};

export const Secondary = Template.bind({});
Secondary.args = {
  value: "",
  type: 'secondary',
  default: `Button`
}

export const Funky = Template.bind({});
Funky.args = {
  value: "",
  type: 'funky',
  default: `Button`
};
