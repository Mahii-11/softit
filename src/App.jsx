import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home"; 
import Checkout from "./pages/Checkout";
import ProductPage from "./pages/ProductPage";


const router = createBrowserRouter([
  {
    path: "/", 
    element: <AppLayout />,
    children: [
      {
        path: "/", 
        element: <Home />,
      },

      {
        path: "/checkout",
        element: <Checkout />
      },

      {
        path: "/productpage",
        element: <ProductPage />
      }

    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
