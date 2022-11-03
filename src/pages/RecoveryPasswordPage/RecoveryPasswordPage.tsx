import { Form } from "antd";
import BlockShadow from "components/Blocks/BlockShadow";
import Button from "components/Buttons/Button";
import Input from "components/FormControls/Input/Input";
import React, { FC } from "react";
import { required } from "utils/inputValidation";
import style from "./RecoveryPasswordPage.module.scss";

const RecoveryPasswordPage: FC = () => {
  const onFinish = (values: any) => {
    console.log("values", values);
  };

  return (
    <BlockShadow width={550} hideForMobile>
      <div className={style.title}>Password Recovery</div>

      <Form onFinish={onFinish}>
        <Form.Item name={"phone"} rules={[required()]}>
          <Input placeholder={"Number phone"} />
        </Form.Item>

        <Form.Item>
          <Button htmlType={"submit"} className={style.btn} block type={"primary"} size={"large"}>
            Send message
          </Button>
        </Form.Item>
      </Form>
    </BlockShadow>
  );
};

export default RecoveryPasswordPage;
