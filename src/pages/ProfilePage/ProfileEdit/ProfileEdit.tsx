import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import Button from "components/Buttons/Button";
import FormItem from "components/FormControls/FormItem/FormItem";
import Input from "components/FormControls/Input/Input";
import Select from "components/FormControls/Select/Select";
import openNotification from "components/openNotification/openNotification";
import { formDefaultProps } from "config/form";
import { useAppDispatch, useAppSelector } from "hooks/reduxHooks";
import useGetTransformedRestaurantsToSelect from "hooks/useGetTransformedRestaurantsToSelect";
import React, { FC } from "react";
import { useChangeUserMutation } from "services/userService";
import { setUser } from "store/slices/userSlice";
import { UserChangeData } from "types/contracts/user";
import { userMutationFields } from "utils/fieldsForPutRequest";
import { required, ruleEmail } from "utils/inputValidation";
import style from "./ProfileEdit.module.scss";

const ProfileEdit: FC = () => {
  const user = useAppSelector((selector) => selector.user.user);
  const [form] = useForm<UserChangeData>();
  const dispatch = useAppDispatch();

  const { restaurants, loading } = useGetTransformedRestaurantsToSelect({});

  const [changeUser, { isLoading }] = useChangeUserMutation();

  const formInitialValues = {
    name: user?.Firstname,
    surname: user?.Lastname,
    email: user?.Email,
    phone: user?.PhoneNumber,
    restaurantId: user?.RestaurantId,
  };

  const onFinish = async (values: UserChangeData) => {
    await changeUser({
      ...userMutationFields({ user }),
      ...values,
    })
      .then(() => {
        user &&
          dispatch(
            setUser({
              ...user,
              Firstname: values.name,
              Lastname: values.surname,
              Email: values.email,
              PhoneNumber: values.phone,
              RestaurantId: values.restaurantId,
            })
          );

        openNotification({
          title: "Success!",
          description: "Profile data was updated",
          layout: "horizontal",
          type: "success",
        });
      })
      .catch(() => {
        openNotification({
          title: "Error!",
          description: "Something went wrong",
          layout: "horizontal",
          type: "warning",
        });
      });
  };

  return (
    <Form form={form} onFinish={onFinish} initialValues={formInitialValues} {...formDefaultProps}>
      <div className={style.wrapper}>
        <div className={style.block}>
          <FormItem label={"First name"} name={"name"} rules={[required()]}>
            <Input placeholder={"First name"} />
          </FormItem>
          <FormItem label={"Last name"} name={"surname"} rules={[required()]}>
            <Input placeholder={"Last name"} />
          </FormItem>
          <FormItem label={"E-mail"} name={"email"} rules={ruleEmail()}>
            <Input placeholder={"E-mail"} />
          </FormItem>
        </div>
        <div className={style.block}>
          <FormItem label={"Number phone"} name={"phone"} rules={[required()]}>
            <Input placeholder={"Number phone"} />
          </FormItem>
          <FormItem label={"Choose company"} name={"restaurantId"} rules={[required()]}>
            <Select options={restaurants} loading={loading} placeholder={"Choose company"} />
          </FormItem>
        </div>
      </div>

      <Form.Item className={style.footer_btn}>
        <Button htmlType={"submit"} loading={isLoading} className={style.save} type={"primary"} size={"large"}>
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileEdit;
