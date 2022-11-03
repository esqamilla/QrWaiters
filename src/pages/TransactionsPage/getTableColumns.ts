import { ColumnsType } from "antd/es/table";
import { TransactionModel } from "types/contracts/transactions";
import { unixToDateTime } from "utils/dateHelper";
import { toMoneyWithCurrency } from "utils/moneyHelper";
import { statusToTag } from "utils/table";

export const getTableColumns = (): ColumnsType<TransactionModel> => {
  return [
    {
      key: "ID",
      title: "ID",
      dataIndex: "id",
      align: "center",
      width: 52,
    },
    {
      key: "Date",
      title: "Date",
      dataIndex: "date",
      render: (date) => unixToDateTime(date),
      width: 133,
    },
    {
      key: "Quantity",
      title: "Quantity",
      dataIndex: "quantity",
      align: "center",
      render: (quantity) => toMoneyWithCurrency(quantity),
      width: 83,
    },
    {
      key: "Status",
      title: "Status",
      dataIndex: "status",
      render: statusToTag,
      align: "center",
      width: 80,
    },
  ];
};
