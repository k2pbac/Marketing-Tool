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
  center: { lat: 43.76406519492777, lng: -79.33268017418551 },
  bankDataArray: [
    {
      id: 1,
      position: "A",
      name: "BMO",
      address: "123 ABC Street",
      lat: 43.78297556464073,
      lng: -79.34445175884431,
    },
    {
      id: 2,
      position: "B",
      name: "BMO",
      address: "123 ABC Street",
      lat: 43.784067088689056,
      lng: -79.32875451376958,
    },
    {
      id: 3,
      position: "C",
      name: "BMO",
      address: "123 ABC Street",
      lat: 43.82297556464073,
      lng: -79.34445175884431,
    },
  ],
};
