import ReactFullpage from "@fullpage/react-fullpage";
import "fullpage.js/vendors/scrolloverflow";
import React, { useState } from "react";
import Header from "./Header";
import First from "./section/First";
import Sixth from "./section/Sixth";
import Landing from "./section/Landing";
import Second from "./section/Second";
import Thrid from "./section/Third";
import Fourth from "./section/Fourth";
import Fifth from "./section/Fifth";

const App = () => {
  const anchors = [
    "landing",
    "firstPage",
    "secondPage",
    "thirdPage",
    "fourthPage",
    "fifthPage",
    "sixthPage",
  ];
  const [page, setPage] = useState("landing");
  return (
    <div>
      <Header page={page} />
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        sectionsColor={[
          "#282c34",
          "#2AC1BC",
          "#2AC1BC",
          "#2AC1BC",
          "#2AC1BC",
          "#2AC1BC",
          "#2AC1BC",
        ]}
        onLeave={(origin, destination, direction) => {
          setPage(destination.anchor);
        }}
        render={({ state, fullpageApi }) => {
          return (
            <div>
              <Landing />
              <First page={page} />
              <Second page={page} />
              <Thrid page={page} />
              <Fourth page={page} />
              <Fifth page={page} />
              <Sixth page={page} />
            </div>
          );
        }}
      />
    </div>
  );
};

export default App;
