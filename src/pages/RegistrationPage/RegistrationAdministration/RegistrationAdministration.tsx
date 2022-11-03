import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import BlockShadow from "components/Blocks/BlockShadow";
import Button from "components/Buttons/Button";
import Checkbox from "components/FormControls/Checkbox/Checkbox";
import Input from "components/FormControls/Input/Input";
import Select from "components/FormControls/Select/Select";
import React, { FC } from "react";
import { companyOptions } from "staticContent/select";
import concatClasses from "utils/concatClasses";
import { required, ruleCheckbox, ruleConfirmPassword, ruleEmail, rulePassword } from "utils/inputValidation";
import style from "../RegistrationPage.module.scss";

const RegistrationAdministration: FC = () => {
  const [form] = useForm();

  const onFinish = (values: any) => {
    console.log("values", values);
  };

  return (
    <BlockShadow width={750}>
      <div className={concatClasses(style.title_child, style.title)}>Registration administration</div>
      <Form form={form} onFinish={onFinish}>
        <div className={style.wrapper}>
          <div className={style.block}>
            <Form.Item name={"firstName"} rules={[required()]}>
              <Input placeholder={"First name"} />
            </Form.Item>
            <Form.Item name={"lastName"} rules={[required()]}>
              <Input placeholder={"Last name"} />
            </Form.Item>
            <Form.Item name={"phone"} rules={[required()]}>
              <Input placeholder={"Number phone"} />
            </Form.Item>
            <Form.Item name={"email"} rules={ruleEmail()}>
              <Input placeholder={"E-mail"} />
            </Form.Item>
            <Form.Item name={"collecting"} rules={[required()]}>
              <Input placeholder={"What are you collecting for?"} />
            </Form.Item>
            <Form.Item name={"Amount"} rules={[required()]}>
              <Input placeholder={"Amount"} />
            </Form.Item>
          </div>
          <div className={style.block}>
            <Form.Item name={"login"} rules={[required()]}>
              <Input placeholder={"Login"} />
            </Form.Item>
            <Form.Item name={"password"} rules={rulePassword()}>
              <Input.Password placeholder={"Password"} />
            </Form.Item>
            <Form.Item name={"confirmPassword"} rules={ruleConfirmPassword("password")}>
              <Input.Password placeholder={"Confirm password"} />
            </Form.Item>
            <Form.Item name={"position"} rules={[required()]}>
              <Input placeholder={"Your position"} />
            </Form.Item>
            <Form.Item name={"referallLink"} rules={[required()]}>
              <Input placeholder={"Referall link"} />
            </Form.Item>
            <Form.Item name={"company"} rules={[required()]}>
              <Select options={companyOptions} placeholder={"Choose company"} />
            </Form.Item>
          </div>
        </div>

        <Form.Item valuePropName="checked" name={"personalData"} rules={ruleCheckbox()}>
          <Checkbox className={style.checkbox} align={"top"}>
            I have read the Consent to the Processing of Personal Data and SimpleTips' policy on the processing of
            personal data. Marking "V" signifies my written consent to the terms of these documents and my agreement to
            abide by them.
          </Checkbox>
        </Form.Item>

        <Form.Item valuePropName="checked" name={"agreement"} rules={ruleCheckbox()}>
          <Checkbox className={style.checkbox} align={"top"}>
            I have read the Offer Agreement. Marking "V" signifies my written consent to the terms of these documents
            and my agreement to abide by them.
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button block htmlType={"submit"} className={style.save} type={"primary"} size={"large"}>
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </BlockShadow>
  );
};

export default RegistrationAdministration;
