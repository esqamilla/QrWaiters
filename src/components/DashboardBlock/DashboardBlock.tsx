import Progress from "components/Progress/Progress";
import Rating from "components/Rating/Rating";
import React, { FC, HTMLProps } from "react";
import concatClasses from "utils/concatClasses";
import style from "./DashboardBlock.module.scss";

interface DashboardBlockProps extends HTMLProps<HTMLDivElement> {}

const DashboardBlock = ({ children, className }: DashboardBlockProps): JSX.Element => {
  return <div className={concatClasses(style.block, className)}>{children}</div>;
};

interface BlockRatingProps extends HTMLProps<HTMLDivElement> {
  rating?: number;
  totalStars?: number;
}

const BlockRating: FC<BlockRatingProps> = ({ rating, totalStars, className }) => {
  return (
    <div className={concatClasses(style.block, style.block_rating, className)}>
      <div className={style.block_rating_title}>Your average rating</div>
      <div className={style.block_rating_rate}>{(rating ?? 0).toFixed(1)}</div>
      <Rating rating={rating ?? 0} totalStars={totalStars} />
    </div>
  );
};

interface BlockProfitProps extends HTMLProps<HTMLDivElement> {
  money?: number;
  month: string;
}

const BlockProfit: FC<BlockProfitProps> = ({ money, month, className }) => {
  return (
    <div className={concatClasses(style.block, style.block_profit, className)}>
      <div className={style.block_profit_money}>
        <span>+</span> {money ?? 0} AED
      </div>
      <div className={style.block_profit_text}>
        You earned during the
        <br /> month: {month}
      </div>
    </div>
  );
};

interface BlockQrProps extends HTMLProps<HTMLDivElement> {
  src?: string;
  qrId?: string;
}

const BlockQr: FC<BlockQrProps> = ({ src, qrId, className }) => {
  return (
    <div className={concatClasses(style.block, style.block_qr, className)}>
      <img src={src} alt="QR Code" className={style.block_qr_img} />
      <div className={style.block_qr_wrapper}>
        <div className={style.block_qr_text}>Your QR code</div>
        <div className={style.block_qr_number}>{qrId || "—"}</div>
      </div>
    </div>
  );
};

interface BlockProgressProps extends HTMLProps<HTMLDivElement> {
  title?: string;
  current?: number;
  total?: number;
}

const BlockProgress: FC<BlockProgressProps> = ({ current, total, title, className }) => {
  return current !== undefined && total !== undefined ? (
    <div className={concatClasses(style.block, style.block_progress, className)}>
      <div className={style.block_progress_progressWrapper}>
        <Progress scale={"small"} type={"circle"} percent={Number(((current / total) * 100).toFixed(0))} />
      </div>
      <div className={style.block_progress_wrapper}>
        <div className={style.block_progress_title}>{title ?? "—"}</div>
        <div className={style.block_progress_numbers}>
          <span>{current} AED</span> / {total} AED
        </div>
      </div>
    </div>
  ) : null;
};

DashboardBlock.Rating = BlockRating;
DashboardBlock.Profit = BlockProfit;
DashboardBlock.Qr = BlockQr;
DashboardBlock.Progress = BlockProgress;

export default DashboardBlock;
