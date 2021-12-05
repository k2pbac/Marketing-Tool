import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BankItemList from "../Components/Marketer/BankItemsList/BankItemList";

export default {
  title: "Marketer/BankItemList",
  component: BankItemList,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BankItemList {...args} />;

export const Default = Template.bind({});
Default.args = {
  bankDataArray: [
    { id: 1, name: "BMO", address: "123 ABC Street" },
    { id: 2, name: "BMO", address: "123 ABC Street" },
    { id: 3, name: "BMO", address: "123 ABC Street" },
    { id: 4, name: "BMO", address: "123 ABC Street" },
  ],
};