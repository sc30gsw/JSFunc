import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Map from "./Map";
import Filter from "./Filter";
import Splice from "./Splice";
import Ternary from "./Ternary";
import Spread from "./Spread";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Spread />
  </StrictMode>
);
