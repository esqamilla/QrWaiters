import { ConfigProvider } from "antd";
import "antd/dist/antd.css";
import en from "antd/lib/locale/en_US";
import "assets/scss/index.scss";
import { publicRoutes, rootRoutes } from "config/routes";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ConfigProvider locale={en}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Suspense fallback={<div />}>
            <RouterProvider router={createBrowserRouter([...rootRoutes, ...publicRoutes])} />
          </Suspense>
        </PersistGate>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>
);
