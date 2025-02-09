import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
