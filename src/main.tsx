import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, defer, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart/Cart.tsx";
import Error from "./pages/Error/Error.tsx";
import Product from "./pages/Product/Product.tsx";
import axios from "axios";
import { PREFIX } from "./helpers/API.ts";
import AuthLayout from "./Layout/Auth/AuthLayout.tsx";
import Login from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import RequireAuth from "./helpers/RequireAuth.tsx";
import { Provider } from "react-redux";
import Menu from "./pages/Menu/Menu.tsx";
import store from "./store/store.ts";
import { Success } from "./pages/Success/Success.tsx";

const MenuLayout = lazy(() => import("./Layout/Menu/MenuLayout.tsx"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RequireAuth>
        <MenuLayout />
      </RequireAuth>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<>Загрука страницы</>}>
            <Menu />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/product/:id",
        element: <Product />,
        errorElement: <>Ошибка</>,
        loader: async ({ params }) => {
          return defer({
            data: new Promise<void>((resolve, reject) => {
              setTimeout(() => {
                axios
                  .get(`${PREFIX}/products/${params.id}`)
                  .then((data) => {
                    resolve(data);
                  })
                  .catch((error) => reject(error));
              }, 2000);
            }),
          });
        },
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
