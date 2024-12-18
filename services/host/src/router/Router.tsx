import { createBrowserRouter } from "react-router";
//@ts-ignore
import shopRoutes from "shop/Router";
//@ts-ignore
import adminRoutes from "admin/Router";
import { App } from "@/components/App";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children: [
        ...shopRoutes,
        ...adminRoutes,
      ],
      errorElement: <div>404 Not Found</div>,
    },
  ]);
  