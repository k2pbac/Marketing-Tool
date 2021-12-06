import "./App.css";
import Display from "./Components/Marketer/Display/Display";

function App() {
  const bankDataArray = [
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
  ];

  return (
    <div className="App">
      <Display bankDataArray={bankDataArray}></Display>
    </div>
  );
}

export default App;
