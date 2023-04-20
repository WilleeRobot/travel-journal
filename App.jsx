import React from "react";
import Header from "./Components/Header";
import Divider from "./Components/Divider";
import TravelCard from "./Components/TravelCard";
import data from "./data.js";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        {data.map((destination, index) => {
          if (index !== data.length - 1) {
            return (
              <React.Fragment key={destination.id}>
                <TravelCard items={destination} />
                <Divider />
              </React.Fragment>
            );
          } else return <TravelCard key={destination.id} items={destination} />;
        })}
      </div>
    </div>
  );
};

export default App;
