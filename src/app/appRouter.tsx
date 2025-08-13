import HomeLayout from "@/app/HomeLayout";
import Counter from "@/features/counter/Counter";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [{ path: "", element: <Counter /> }],
  },
]);
