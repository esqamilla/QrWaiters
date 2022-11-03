import { StarIcon, StarOutlineIcon } from "components/Icons/Icons";
import React, { FC } from "react";
import concatClasses from "utils/concatClasses";
import { getRange } from "utils/getRange";
import style from "./Rating.module.scss";

interface RatingProps {
  className?: string;
  rating: number;
  totalStars?: number;
}

const getStars = (rating: number, total: number) =>
  getRange(0, total).map((number) => (number < rating ? <StarIcon key={number} /> : <StarOutlineIcon key={number} />));

const Rating: FC<RatingProps> = ({ className, rating, totalStars = 5 }) => {
  return <div className={concatClasses(className, style.wrapper)}>{getStars(rating, totalStars)}</div>;
};

export default Rating;
