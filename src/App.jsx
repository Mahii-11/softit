import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home"; 

const router = createBrowserRouter([
  {
    path: "/", // VERY IMPORTANT
    element: <AppLayout />,
    children: [
      {
        index: true, // default "/"
        element: <Home />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
