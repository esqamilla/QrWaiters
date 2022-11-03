import moment, { Moment } from "moment";
import { Key } from "react";

/*
 * 1679208800 => 20.01.70 / 14:26 PM
 * */
export const unixToDateTime = (date: Key) => moment(Number(date)).format("DD.MM.YY/HH:mm");

/*
 * 1679208800 => 20.01.19
 * */
export const momentToDate = (date: Moment) => moment(Number(date)).format("DD.MM.YY");
