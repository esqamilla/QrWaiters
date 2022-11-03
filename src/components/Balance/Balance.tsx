import { Space } from "antd";
import Tag from "components/Tag/Tag";
import React, { FC } from "react";
import concatClasses from "utils/concatClasses";
import { toMoney } from "utils/moneyHelper";
import style from "./Balance.module.scss";

interface BalanceProps {
  money?: number;
  className?: string;
}

const Balance: FC<BalanceProps> = ({ money, className }) => {
  return (
    <Space className={concatClasses(style.wrapper, className)}>
      <div className={style.text}>Balance</div>
      <Tag type={"accentPrimary"}>{toMoney(money ?? 0)} AED</Tag>
    </Space>
  );
};

export default Balance;
