import Typography from './Typography'

export default {
title: 'Misc/Typography',
component: Typography,
};

const Template = (args, {argTypes}) => ({
props: Object.keys(argTypes),
components: {Typography},
template: `<typography />`,
});

export const Default = Template.bind({});
Default.args = {};
