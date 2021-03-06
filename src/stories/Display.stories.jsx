import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Display from "../Components/Marketer/Display/Display";

export default {
  title: "Marketer/Display",
  component: Display,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Display {...args} />;

export const Default = Template.bind({});
Default.args = {
  bankDataArray: [
    {
      id: 1,
      position: "A",
      name: "BMO",
      address: "31 Kempsell Crescent, North York, ON M2J 2Z6",
      lat: 43.78297556464073,
      lng: -79.34445175884431,
    },
    {
      id: 2,
      position: "B",
      name: "BMO",
      address: "Pleasant View, Toronto, ON",
      lat: 43.784067088689056,
      lng: -79.32875451376958,
    },
    {
      id: 3,
      position: "C",
      name: "BMO",
      address: "495 Denison St, Markham, ON L3R 1B8",
      lat: 43.82297556464073,
      lng: -79.34445175884431,
    },
  ],
};
