import BlockShadow from "components/Blocks/BlockShadow";
import Button from "components/Buttons/Button";
import { publicUrl } from "config/path";
import React, { FC, useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import style from "./RegistrationPage.module.scss";

const RegistrationPage: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showOutlet, setShowOutlet] = useState<boolean>(false);

  useEffect(() => {
    if (location.pathname !== publicUrl.User.Registration.url) setShowOutlet(true);
    else setShowOutlet(false);
  }, [location.pathname]);

  const onRegisterTipRecipient = () => {
    navigate(publicUrl.User.Registration.RegTipRecipient.path);
  };

  const onRegisterAdministration = () => {
    navigate(publicUrl.User.Registration.RegAdministration.path);
  };

  return !showOutlet ? (
    <BlockShadow hideForMobile className={style.blockShadowChoice}>
      <div className={style.title}>Registration</div>
      <div className={style.text}>You register as</div>

      <Button type={"primary"} size={"large"} block onClick={onRegisterTipRecipient}>
        Tip recipient
      </Button>
      {/*<div className={style.separator}>or</div>*/}
      {/*<Button type={"dark"} size={"large"} block onClick={onRegisterAdministration}>*/}
      {/*  Administration*/}
      {/*</Button>*/}
    </BlockShadow>
  ) : (
    <Outlet />
  );
};

export default RegistrationPage;
