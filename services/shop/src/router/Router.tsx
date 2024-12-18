import { App } from "@/components/App";
import Shop from "@/pages/Shop";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router";

const routes = [
    {
      path: '/',
      element: <App />,
      children: [
           {
            path: '/shop',
            element: (
                <Suspense fallback={'loading...'} >
                    <Shop />
                </Suspense>
            )
           }
    ],
      errorElement: <div>404 Not Found</div>,
    },
  ]

export const router = createBrowserRouter(routes);
export default routes;