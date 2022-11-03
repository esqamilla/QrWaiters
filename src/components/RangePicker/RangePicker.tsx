import { DatePicker, TimeRangePickerProps } from "antd";
import Button, { ButtonProps } from "components/Buttons/Button";
import RangePickerFooter from "components/RangePicker/RangePickerFooter";
import moment, { Moment } from "moment";
import React, { FC, useEffect, useState } from "react";
import concatClasses from "utils/concatClasses";
import { momentToDate } from "utils/dateHelper";
import style from "./RangePicker.module.scss";

const { RangePicker: RangePickerAntd } = DatePicker;

export type Dates = [Moment, Moment] | [Moment] | [];

export interface RangePickerProps extends Omit<TimeRangePickerProps, "onChange" | "value"> {
  onChange?: (dates: Dates) => void;
  buttonProps?: ButtonProps;
  value?: Dates;
}

const RangePicker: FC<RangePickerProps> = ({
  className,
  buttonProps,
  dropdownClassName,
  onChange,
  value,
  ...props
}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [dates, setDates] = useState<Dates>([]);
  const [datesOnChange, setDatesOnChange] = useState<Dates>([]);

  const toggleOpenCalendar = () => {
    setOpen((prev) => !prev);
  };

  const onCancel = () => {
    toggleOpenCalendar();
    setDates([]);
    setDatesOnChange([]);
    onChange && onChange([]);
  };

  useEffect(() => {
    value && setDates(value as Dates);
  }, [value]);

  return (
    <div className={style.wrapper}>
      <Button
        size={"small"}
        onClick={toggleOpenCalendar}
        {...buttonProps}
        className={concatClasses(style.rangePicker_btn, buttonProps?.className)}
        type={!!dates.length ? "primary" : "default"}>
        {!!dates.length ? dates.map(momentToDate).join(" - ") : "Date"}
      </Button>

      <RangePickerAntd
        className={concatClasses(className, style.rangePicker)}
        popupClassName={concatClasses(dropdownClassName, style.rangePicker_popup)}
        inputReadOnly
        open={isOpen}
        disabledDate={() => {
          return false;
        }}
        onCalendarChange={(dates) => {
          if (dates?.length === 2 && moment(dates[0]).unix() === moment(dates[1]).unix()) {
            setDatesOnChange([moment(dates[0])].filter((date) => date !== null) as Dates);
          } else {
            setDatesOnChange((dates ?? []).filter((date) => date !== null) as Dates);
          }
        }}
        renderExtraFooter={() => (
          <RangePickerFooter
            onCancel={onCancel}
            datesOnChange={datesOnChange}
            setDates={setDates}
            toggleOpenCalendar={toggleOpenCalendar}
            onChange={onChange}
          />
        )}
        {...props}
      />
    </div>
  );
};

export default RangePicker;
