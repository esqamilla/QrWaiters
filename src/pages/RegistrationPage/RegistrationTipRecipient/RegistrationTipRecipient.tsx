import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import BlockShadow from "components/Blocks/BlockShadow";
import Button from "components/Buttons/Button";
import Checkbox from "components/FormControls/Checkbox/Checkbox";
import Input from "components/FormControls/Input/Input";
import Select from "components/FormControls/Select/Select";
import openNotification from "components/openNotification/openNotification";
import { publicUrl } from "config/path";
import useGetTransformedPositionsToSelect from "hooks/useGetTransformedPositionsToSelect";
import useGetTransformedRestaurantsToSelect from "hooks/useGetTransformedRestaurantsToSelect";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useRegistrationMutation } from "services/userService";
import { errorNotification } from "staticContent/notification";
import { ErrorType } from "types/error";
import { IRegistrationRequest, IRegistrationTipRecipient } from "types/registration";
import concatClasses from "utils/concatClasses";
import {
  required,
  ruleCheckbox,
  ruleConfirmPassword,
  ruleEmail,
  ruleNumber,
  rulePassword,
} from "utils/inputValidation";
import style from "../RegistrationPage.module.scss";

const RegistrationTipRecipient: FC = () => {
  const navigate = useNavigate();
  const [form] = useForm<IRegistrationTipRecipient>();

  const { restaurants, loading: loadingRestaurants } = useGetTransformedRestaurantsToSelect({});
  const { positions, loading: loadingPositions } = useGetTransformedPositionsToSelect({});

  const [register, { isLoading }] = useRegistrationMutation();

  const onFinish = async (values: IRegistrationTipRecipient) => {
    // todo: переделать на delete из values
    const data: IRegistrationRequest = {
      email: values.email,
      goal: values.goal,
      goalSum: values.goalSum ? Number(values.goalSum) : undefined,
      name: values.name,
      isWaiter: values.isWaiter,
      login: values.login,
      password: values.password,
      phone: values.phone,
      referalLink: values.referalLink || undefined,
      surname: values.surname,
      restarauntId: values.restarauntId,
    };

    console.log("data on register", data);
    console.log("values", values);

    let notificationData = {
      ...errorNotification,
    };

    // todo: использовать только один openNotification
    register(data)
      .unwrap()
      .then(() => {
        notificationData = {
          title: "Congratulations!",
          description: "Registration was successful",
          type: "success",
        };

        navigate(publicUrl.User.Login.url);
      })
      .catch((error) => {
        if (error?.data?.Error === ErrorType.EmailAlreadyExist) {
          notificationData = {
            title: "Error!",
            description: "This E-mail is already taken",
          };
        } else if (error?.data?.Error === ErrorType.LoginAlreadyExist) {
          notificationData = {
            title: "Error!",
            description: "This Login is already taken",
          };
        }
      });

    openNotification(notificationData);
  };

  return (
    <BlockShadow width={750} className={style.blockShadow} hideForMobile>
      <div className={concatClasses(style.title_child, style.title)}>Registration</div>

      <Form
        initialValues={{
          isWaiter: true,
        }}
        form={form}
        onFinish={onFinish}>
        <div className={style.wrapper}>
          <div className={style.block}>
            <Form.Item name={"isWaiter"} hidden valuePropName="checked">
              <Checkbox className={style.checkbox} />
            </Form.Item>
            <Form.Item name={"name"} rules={[required()]}>
              <Input placeholder={"First name"} />
            </Form.Item>
            <Form.Item name={"surname"} rules={[required()]}>
              <Input placeholder={"Last name"} />
            </Form.Item>
            <Form.Item name={"phone"} rules={ruleNumber()}>
              <Input placeholder={"Number phone"} maxLength={11} />
            </Form.Item>
            <Form.Item name={"email"} rules={ruleEmail()}>
              <Input placeholder={"E-mail"} />
            </Form.Item>
            <Form.Item name={"goal"}>
              <Input placeholder={"What are you collecting for?"} />
            </Form.Item>
            <Form.Item name={"position"} rules={[required()]}>
              <Select options={positions} loading={loadingPositions} placeholder={"Your position"} />
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
            <Form.Item name={"referalLink"}>
              <Input placeholder={"Referall link"} />
            </Form.Item>
            <Form.Item name={"goalSum"} rules={ruleNumber()}>
              <Input placeholder={"Amount"} />
            </Form.Item>
            <Form.Item name={"restarauntId"} rules={[required()]}>
              <Select options={restaurants} loading={loadingRestaurants} placeholder={"Choose company"} />
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
          <Button loading={isLoading} block htmlType={"submit"} className={style.save} type={"primary"} size={"large"}>
            Sign up
          </Button>
        </Form.Item>
      </Form>
    </BlockShadow>
  );
};

export default RegistrationTipRecipient;
