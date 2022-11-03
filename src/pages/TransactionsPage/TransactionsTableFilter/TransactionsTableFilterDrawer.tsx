import { FormInstance } from "antd";
import Button from "components/Buttons/Button";
import Drawer from "components/Drawer/Drawer";
import RangePicker from "components/RangePicker/RangePicker";
import { initialFilter as initialFormFilter } from "pages/TransactionsPage/TransactionsPage";
import React, { FC, useEffect, useState } from "react";
import { TransactionsFilterData, TransactionsFilterForm, TransactionStatusType } from "types/contracts/transactions";
import style from "../TransactionsPage.module.scss";

interface TransactionsTableFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialFilter?: TransactionsFilterData;
  transactionsFilterForm: FormInstance<TransactionsFilterForm>;
  changePageFilter: (value: TransactionsFilterData) => void;
}

const TransactionsTableFilterDrawer: FC<TransactionsTableFilterDrawerProps> = ({
  onClose,
  isOpen,
  initialFilter = initialFormFilter,
  transactionsFilterForm,
  changePageFilter,
}) => {
  const [filter, setFilter] = useState<TransactionsFilterData>(initialFilter);

  useEffect(() => {
    setFilter({
      dates: transactionsFilterForm.getFieldValue("dates"),
      tipsType: transactionsFilterForm.getFieldValue("tipsType"),
    });
  }, [isOpen]);

  const onFinish = () => {
    onClose();
    transactionsFilterForm.setFieldsValue(filter);
    changePageFilter(filter);
  };

  return (
    <Drawer width={"100%"} open={isOpen} onClose={onClose}>
      <Drawer.Content>
        <Drawer.Chapter>Type</Drawer.Chapter>
        <div className={style.filter_wrapper}>
          <Button
            size={"large"}
            type={filter.tipsType === TransactionStatusType.all ? "primary" : "default"}
            onClick={() => {
              setFilter((prevFilter) => ({
                ...prevFilter,
                tipsType: TransactionStatusType.all,
              }));
            }}
            className={style.filter_btn}>
            All
          </Button>
          <Button
            onClick={() => {
              setFilter((prevFilter) => ({
                ...prevFilter,
                tipsType: TransactionStatusType.receipts,
              }));
            }}
            type={filter.tipsType === TransactionStatusType.receipts ? "primary" : "default"}
            size={"large"}
            className={style.filter_btn}>
            Receipts
          </Button>
          <Button
            onClick={() => {
              setFilter((prevFilter) => ({
                ...prevFilter,
                tipsType: TransactionStatusType.withdrawals,
              }));
            }}
            type={filter.tipsType === TransactionStatusType.withdrawals ? "primary" : "default"}
            size={"large"}
            className={style.filter_btn}>
            Withdrawals
          </Button>
        </div>

        <Drawer.Chapter>Period</Drawer.Chapter>
        <div className={style.filter_wrapper}>
          <RangePicker
            buttonProps={{
              size: "large",
              className: style.filter_btn,
            }}
            value={filter.dates}
            onChange={(dates) => {
              setFilter((prevFilter) => ({
                ...prevFilter,
                dates: dates,
              }));
            }}
          />
        </div>
      </Drawer.Content>

      <Drawer.Footer>
        <Button size={"large"} onClick={onFinish} block type={"primary"} className={style.filter_btn_finish}>
          Apply
        </Button>
      </Drawer.Footer>
    </Drawer>
  );
};

export default TransactionsTableFilterDrawer;
