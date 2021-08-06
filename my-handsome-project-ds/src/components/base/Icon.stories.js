import MyIcon from './Icon';

export default {
  title: 'Base/Icon',
  component: MyIcon,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyIcon },
  template:
    '<my-icon :icon="icon"/>',
});

export const Default = Template.bind({});
Default.args = {
  icon: "home",
};
