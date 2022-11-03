import { Typography } from "antd";
import { ParagraphProps } from "antd/es/typography/Paragraph";
import Tag, { TagType } from "components/Tag/Tag";
import { ReactNode } from "react";
import { TransactionStatus } from "types/contracts/transactions";

const { Paragraph } = Typography;

const statusToTagText: Record<TransactionStatus, string> = {
  Created: "Created",
  Canceled: "Canceled",
  Paid: "Paid",
};

const transactionStatusToTagStatus: Record<TransactionStatus, TagType> = {
  Paid: "success",
  Canceled: "danger",
  Created: "info",
};

export const statusToTag = (status: TransactionStatus) => {
  return <Tag type={transactionStatusToTagStatus[status]}>{statusToTagText[status]}</Tag>;
};

export const renderParagraph = (data: ReactNode, ellipsis: ParagraphProps["ellipsis"] = true) =>
  data ? <Paragraph ellipsis={ellipsis}>{data}</Paragraph> : "—";
