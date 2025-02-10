import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./pages/NotFound/NotFound";
import ItemPage from "./pages/ItemPage/ItemPage";
import ErrorBlock from "./components/ErrorBlock/ErrorBlock";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorBlock />,
  },
  {
    path: "/page/:page",
    element: <HomePage />,
    errorElement: <ErrorBlock />,
    children: [
      {
        path: "/page/:page/details/:id",
        element: <ItemPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
