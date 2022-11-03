import { Dates } from "components/RangePicker/RangePicker";
import { IPagination } from "hooks/usePagination";
import { Key } from "react";

export type TransactionStatus = "Created" | "Canceled" | "Paid";

export interface TransactionModel {
  id: number;
  key: Key;
  date: number;
  quantity: number;
  status: TransactionStatus;
}

export type TransactionsTableData = TransactionModel[];

export interface TransactionTableData {
  data: TransactionsTableData;
  total: number;
}

export enum TransactionStatusType {
  all,
  receipts,
  withdrawals,
}

export interface TransactionsFilterData {
  dates: Dates | undefined;
  tipsType: TransactionStatusType;
}

export interface TipListById {
  userId: number;
  pagination?: IPagination;
  StartDate?: Key;
  EndDate?: Key;
  tipsType?: TransactionStatusType;
}

export interface TransactionsFilterForm {
  dates: Dates;
  tipTypes: TransactionStatusType;
}
