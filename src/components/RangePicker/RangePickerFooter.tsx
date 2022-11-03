import Button from "components/Buttons/Button";
import { Dates, RangePickerProps } from "components/RangePicker/RangePicker";
import style from "components/RangePicker/RangePicker.module.scss";
import React, { FC } from "react";

interface RangePickerFooterProps {
  onCancel: () => void;
  setDates: (dates: Dates) => void;
  toggleOpenCalendar: () => void;
  datesOnChange: Dates;
  onChange?: RangePickerProps["onChange"];
}

const RangePickerFooter: FC<RangePickerFooterProps> = ({
  onCancel,
  setDates,
  toggleOpenCalendar,
  datesOnChange,
  onChange,
}) => {
  return (
    <div className={style.rangePicker_footer}>
      <Button size={"mini"} onClick={onCancel}>
        Cancel
      </Button>
      <Button
        size={"mini"}
        type={"primary"}
        onClick={() => {
          setDates(datesOnChange);
          toggleOpenCalendar();
          onChange && onChange(datesOnChange);
        }}>
        Apply
      </Button>
    </div>
  );
};

export default RangePickerFooter;
