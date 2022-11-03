import Page from "components/Page/Page";
import Table from "components/Table/Table";
import { useAppSelector } from "hooks/reduxHooks";
import usePagination from "hooks/usePagination";
import { getTableColumns } from "pages/TransactionsPage/getTableColumns";
import useTransformTipsToTable from "pages/TransactionsPage/hooks/useTransformTipsToTable";
import TransactionsTableFilter from "pages/TransactionsPage/TransactionsTableFilter/TransactionsTableFilter";
import React, { FC, useState } from "react";
import { TransactionsFilterData, TransactionStatusType } from "types/contracts/transactions";
import style from "./TransactionsPage.module.scss";

export const initialFilter: TransactionsFilterData = { dates: [], tipsType: TransactionStatusType.all };

const TransactionsPage: FC = () => {
  const user = useAppSelector((selector) => selector.user.user);
  const [filter, setFilter] = useState<TransactionsFilterData>(initialFilter);

  const onChangeFilter = (values: TransactionsFilterData) => {
    setFilter(values);
  };

  const { changePagination, pagination, currentPage } = usePagination();

  const { tips, loading } = useTransformTipsToTable({
    userId: user?.Id,
    pagination,
    filter,
  });

  return (
    <Page className={style.page}>
      <Page.Header>Transactions</Page.Header>
      <Page.Description>Here you can see all the transactions made by the guests of your restaurant</Page.Description>
      <Page.Content>
        <TransactionsTableFilter setFilter={onChangeFilter} />
        <Table
          pagination={{
            current: currentPage,
            onChange: changePagination,
            total: tips.total,
          }}
          columns={getTableColumns()}
          dataSource={tips.data}
          loading={loading}
          className={style.table}
          scroll={{
            x: 345,
            y: 398,
          }}
        />
      </Page.Content>
    </Page>
  );
};

export default TransactionsPage;
