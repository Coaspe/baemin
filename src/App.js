import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";
import React, { useState } from "react";
import Header from "./Header";
import First from "./section/First";
import Fourth from "./section/Fourth";
import Landing from "./section/Landing";
import Second from "./section/Second";
import Thrid from "./section/Third";

const App = () => {
  const anchors = [
    "landing",
    "firstPage",
    "secondPage",
    "thirdPage",
    "fourthPage",
  ];
  const [page, setPage] = useState("landing");
  console.log(page);
  return (
    <div>
      <Header page={page} />
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        sectionsColor={["#282c34", "#2AC1BC", "#2AC1BC", "#2AC1BC", "#2AC1BC"]}
        onLeave={(origin, destination, direction) => {
          console.log("onLeave event", { origin, destination, direction });
          setPage(destination.anchor);
        }}
        render={({ state, fullpageApi }) => {
          console.log("render prop change", state, fullpageApi); // eslint-disable-line no-console

          return (
            <div>
              <Landing />
              <First />
              <Second />
              <Thrid />
              <Fourth />
            </div>
          );
        }}
      />
    </div>
  );
};

export default App;
