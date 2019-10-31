import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppProviders from "./context";

import userbase from "userbase-js";
userbase.configure({ appId: "1b4180a1-49f5-405d-a6f9-6c2df3ce997d" });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <AppProviders>
      <App />
    </AppProviders>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
