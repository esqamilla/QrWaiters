import { IPagination } from "hooks/usePagination";
import { TipListResponse } from "models/Tip";
import { useMemo } from "react";
import { useGetTipsByUserIdQuery } from "services/tipsService";
import { TransactionsFilterData, TransactionTableData } from "types/contracts/transactions";

interface UseTransformTipsToTableProps {
  userId?: number;
  pagination: IPagination;
  filter: TransactionsFilterData;
}

const transformData = (tips?: TipListResponse): TransactionTableData => {
  return {
    data:
      tips?.Objects?.map((tip) => ({
        id: tip.Id,
        date: tip.Date,
        key: tip.Id,
        quantity: tip.Amount,
        status: tip.PaymentStatus,
      })) ?? [],
    total: tips?.Total ?? 0,
  };
};

const useTransformTipsToTable = ({ userId, pagination, filter }: UseTransformTipsToTableProps) => {
  const { data, isLoading, isFetching } = useGetTipsByUserIdQuery(
    {
      userId: userId ?? -1,
      pagination,
      StartDate: filter?.dates ? filter?.dates[0]?.unix() : undefined,
      EndDate: filter?.dates ? ([1] ? filter?.dates[1]?.unix() : filter?.dates[0]?.unix()) : undefined,
      tipsType: filter.tipsType,
    },
    { skip: !userId }
  );

  console.log("filter", filter);

  const tips = useMemo(() => transformData(data), [data]);

  return {
    tips,
    loading: isLoading || isFetching,
  };
};

export default useTransformTipsToTable;
