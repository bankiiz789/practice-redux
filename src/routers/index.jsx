import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "../counter";
import UserLists from "../pages/userLists";
import UserCreate from "../pages/userCreate";
import UserEdit from "../pages/userEdit";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Counter />,
  },
  {
    path: "/user",
    element: <UserLists />,
  },
  {
    path: "/user/create",
    element: <UserCreate />,
  },
  {
    path: "/user/:id",
    element: <UserEdit />,
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
