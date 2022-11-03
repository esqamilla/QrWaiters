import { Table as TableAntd, TablePaginationConfig, TableProps as TableAntdProps } from "antd";
import React from "react";
import { countPerPage } from "staticContent/table";
import concatClasses from "utils/concatClasses";
import style from "./Table.module.scss";

type TablePaginationPosition = "left" | "center" | "right";

export type TablePagination<T> =
  | false
  | (Omit<TablePaginationConfig, "position"> & {
      position?: TablePaginationPosition;
    });

interface TableProps<RecordType> extends Omit<TableAntdProps<RecordType>, "pagination"> {
  pagination: TablePagination<RecordType>;
}

const getClassByPosition: Record<TablePaginationPosition, string> = {
  left: style.paginationLeft,
  center: style.paginationCenter,
  right: style.paginationRight,
};

const Table = <T extends {}>({ className, pagination = false, dataSource, ...props }: TableProps<T>): JSX.Element => {
  const paginationPosition = typeof pagination !== "boolean" ? pagination.position : undefined;
  const defaultPagination = {
    pageSize: countPerPage,
    hideOnSinglePage: true,
    showSizeChanger: false,
    position: "left",
  };

  return (
    <TableAntd
      pagination={{
        ...defaultPagination,
        ...pagination,
        position: ["bottomLeft"],
      }}
      className={concatClasses(
        style.table,
        (!dataSource || !dataSource?.length) && style.table_noContent,
        className,
        getClassByPosition[!paginationPosition ? "left" : paginationPosition]
      )}
      dataSource={dataSource}
      {...props}
    />
  );
};

export default Table;
