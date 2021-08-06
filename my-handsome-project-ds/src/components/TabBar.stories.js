import TabBar from './TabBar'

export default {
title: 'TabBar',
component: TabBar,
};

const Template = (args, {argTypes}) => ({
props: Object.keys(argTypes),
components: {TabBar},
template: `<div style="margin: 0 auto; width: 375px;"><tab-bar /></div>`,
});

export const Default = Template.bind({});
Default.args = {};
