import Auth from "components/Auth/Auth";
import LayoutMain from "components/Layouts/LayoutMain";
import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const App: FC = () => {
  return (
    <Auth>
      <LayoutMain>
        <Outlet />
      </LayoutMain>
    </Auth>
  );
};

export default App;
