import { Form, FormProps, Space } from "antd";
import { useForm } from "antd/es/form/Form";
import Button from "components/Buttons/Button";
import FormItem from "components/FormControls/FormItem/FormItem";
import Radio from "components/FormControls/Radio/Radio";
import { FilterIcon } from "components/Icons/Icons";
import RangePicker from "components/RangePicker/RangePicker";
import { initialFilter } from "pages/TransactionsPage/TransactionsPage";
import TransactionsTableFilterDrawer from "pages/TransactionsPage/TransactionsTableFilter/TransactionsTableFilterDrawer";
import React, { FC, useState } from "react";
import { TransactionsFilterData, TransactionsFilterForm, TransactionStatusType } from "types/contracts/transactions";
import concatClasses from "utils/concatClasses";
import style from "../TransactionsPage.module.scss";

interface TransactionsTableFilterProps {
  setFilter: (value: TransactionsFilterData) => void;
}

const TransactionsTableFilter: FC<TransactionsTableFilterProps> = ({ setFilter }) => {
  const [transactionsFilterForm] = useForm<TransactionsFilterForm>();

  const [open, setOpen] = useState<boolean>(false);

  const initialValues = {
    tipsType: TransactionStatusType.all,
  };

  const onFilterClose = () => {
    setOpen(false);
  };

  const onFilterOpen = () => {
    setOpen(true);
  };

  const onFilterChange: FormProps["onFieldsChange"] = (changedFields, allFields) => {
    const filter = allFields.reduce(
      (prevFilter, field) => ({
        ...prevFilter,
        [Array.isArray(field.name) ? field.name[0] : field.name]: field.value,
      }),
      {}
    );
    setFilter(filter as TransactionsFilterData);
  };

  const onReset = () => {
    transactionsFilterForm.resetFields();
    setFilter(initialFilter);
  };

  return (
    <>
      <div className={style.wrapper}>
        <Form form={transactionsFilterForm} initialValues={initialValues} onFieldsChange={onFilterChange}>
          <div className={style.form_wrapper}>
            <Space size={24} className={style.space}>
              <div className={style.form_btnWrapper}>
                <FormItem name={"dates"} noStyle>
                  <RangePicker />
                </FormItem>
                <Button size={"small"} onClick={onReset} className={style.tablet_item}>
                  Clear all
                </Button>
              </div>
              <div className={style.form_btnWrapper}>
                <FormItem name="tipsType" noStyle>
                  <Radio.Group>
                    <Radio className={style.desktop_item} value={TransactionStatusType.all}>
                      All
                    </Radio>
                    <Radio className={style.desktop_item} value={TransactionStatusType.receipts}>
                      Receipts
                    </Radio>
                    <Radio className={style.desktop_item} value={TransactionStatusType.withdrawals}>
                      Withdrawals
                    </Radio>
                  </Radio.Group>
                </FormItem>
              </div>
            </Space>
            <Button
              size={"small"}
              onClick={onReset}
              className={concatClasses(style.desktop_item, style.desktop_item_noTablet)}>
              Clear all
            </Button>
            <Button
              size={"small"}
              icon={<FilterIcon />}
              onClick={onFilterOpen}
              onlyIcon
              className={style.mobile_item}
            />
          </div>
        </Form>
      </div>

      <TransactionsTableFilterDrawer
        transactionsFilterForm={transactionsFilterForm}
        onClose={onFilterClose}
        isOpen={open}
        changePageFilter={setFilter}
      />
    </>
  );
};

export default TransactionsTableFilter;
