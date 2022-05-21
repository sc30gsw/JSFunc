import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Map from "./Map";
import Filter from "./Filter";
import Splice from "./Splice";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Splice />
  </StrictMode>
);
