import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BankItem from "../Components/Marketer/BankItem/BankItem";

export default {
  title: "Marketer/BankItem",
  component: BankItem,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BankItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Button",
  clicked: false,
};

export const Clicked = Template.bind({});
Clicked.args = {
  label: "Button",
  bankData: { name: "BMO", address: "123 ABC Street" },
  clicked: true,
};
