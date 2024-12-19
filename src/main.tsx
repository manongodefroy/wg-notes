import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";
import { HelpScoutContextProvider } from "@helpscout/ui-kit";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <HelpScoutContextProvider>
      <h4>
        <a href="[URL here]">Jan's Famous Cupcakes</a>
      </h4>
      <p className="test">Customer since 05/07/2012 10:55 AM</p>
      <ul>
        <li>
          <a href="[URL here]">Administrator</a>
        </li>
        <li>Business Plan</li>
        <li>$1,245.00 lifetime value</li>
      </ul>
      {/* {<App />} */}
    </HelpScoutContextProvider>
  </React.StrictMode>
);
