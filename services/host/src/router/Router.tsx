import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router";
//@ts-ignore
import shopRoutes from "shop/Router";
//@ts-ignore
import adminRoutes from "admin/Router";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      children: [
        ...shopRoutes,
        ...adminRoutes,
      ],
      errorElement: <div>404 Not Found</div>,
    },
  ]);
  