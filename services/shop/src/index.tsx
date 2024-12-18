import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import {  } from '@packages/build_config';
import { } from '@packages/shared';
import Shop from './pages/Shop';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shop />,
    errorElement: <div>404 Not Found</div>,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
