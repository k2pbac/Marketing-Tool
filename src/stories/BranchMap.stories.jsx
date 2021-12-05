import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BranchMap from "../Components/Marketer/Map/BranchMap";

export default {
  title: "Marketer/BranchMap",
  component: BranchMap,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BranchMap {...args} />;

export const Default = Template.bind({});
Default.args = {
  branchLocationData: [
    {
      id: 1,
      lat: 43.78297556464073,
      lng: -79.34445175884431,
    },
    {
      id: 2,
      lat: 43.784067088689056,
      lng: -79.32875451376958,
    },
    {
      id: 3,
      lat: 43.82297556464073,
      lng: -79.34445175884431,
    },
  ],
};
