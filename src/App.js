import React from "react";
import ReactDOM from "react-dom/client";

import Body from "./component/Body";
import Header from "./component/Header";

//App Layout
const AppLayout = () => {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
