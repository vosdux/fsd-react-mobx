import { RouterProvider } from "react-router-dom";
import { router } from "./routing";

export const App = () => {
  return <RouterProvider router={router} />;
};
