import { Route as IRoute } from "config/routes";
import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";

interface RouterProps {
  routes: IRoute[];
}

const Router: FC<RouterProps> = ({ routes }) => {
  return (
    <Routes>
      {Object.values(routes).map(({ path, element: Element, caseSensitive }) => {
        return <Route path={path} element={Element} key={path} caseSensitive={caseSensitive} />;
      })}
    </Routes>
  );
};

export default Router;
