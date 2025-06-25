
import { createRoot } from "react-dom/client";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./App";

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={appRouter} />
);
