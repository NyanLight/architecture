import { App } from "@/components/App";
import Admin from "@/pages/Admin";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router";

const routes = [
    {
      path: '/',
      element: <App />,
      children: [
           {
            path: '/admin',
            element: (
                <Suspense fallback={'loading...'} >
                    <Admin />
                </Suspense>
            )
           }
    ],
      errorElement: <div>404 Not Found</div>,
    },
  ]

export const router = createBrowserRouter(routes);
export default routes;