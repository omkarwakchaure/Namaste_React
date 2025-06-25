import "./App.css";
import Header from "./components/Header.tsx";
import Body from "./components/Body.tsx";
import About from "./components/About.tsx";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./components/Contact.tsx";
import Error from "./components/Error.tsx";
import RestaurantMenu from "./components/RestaurantMenu.tsx";
// import Grocery from "./components/Grocery.tsx";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./components/Grocery.tsx"));
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);
