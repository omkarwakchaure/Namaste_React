import "./App.css";
import Header from "./components/Header.tsx";
import Body from "./components/Body.tsx";
import About from "./components/About.tsx";

const App = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/about",
    element:<About/>
  }
])

