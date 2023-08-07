import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./App.css"
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <MantineProvider withGlobalStyles withCSSVariables>
        <ModalsProvider>
          <Notifications
            className="notification"
            position="top-right"
            autoClose="1500ms"
          />
          <App />
        </ModalsProvider>
      </MantineProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
