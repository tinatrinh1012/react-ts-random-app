import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import RandomCatDog from './src/pages/RandomCatDog';
import TodoApp from './src/pages/TodoApp/TodoApp';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/random-cat-dog',
    element: <RandomCatDog />,
  },
  {
    path: '/todo-app',
    element: <TodoApp />,
  },
]);

root.render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>
);
