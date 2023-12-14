import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import Store from "./store/index";

import "./index.css";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
