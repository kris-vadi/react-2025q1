import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const mountElement = document.getElementById("root") as HTMLElement;
const root = createRoot(mountElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
