import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DayOfWeekShape } from "react-dates";
import { Moment, RangeDate } from "./types";
import VibeComponentProps from "../../types/VibeComponentProps";
import VibeComponent from "../../types/VibeComponent";
interface DatePickerProps extends VibeComponentProps {
    /** set the first day of the week to display */
    firstDayOfWeek?: DayOfWeekShape;
    /** current start date */
    date?: Moment;
    /** current end date */
    endDate?: Moment;
    /** on date selected callback */
    onPickDate?: (date: Moment | RangeDate) => void;
    /** hide the month navigations keys */
    hideNavigationKeys?: boolean;
    /** show days outside the cuurent month view */
    enableOutsideDays?: boolean;
    /** show week number column */
    showWeekNumber?: boolean;
    /** set the size of single day element */
    daySize?: number;
    /** determine if day should be disabled */
    shouldBlockDay?: (date: Moment) => boolean;
    /** date range mode*/
    range?: boolean;
    /** number of month to display*/
    numberOfMonths?: number;
    /** determine if year should be disabled */
    shouldBlockYear?: (year: number) => boolean;
    /** determine if date range should be disabled */
    shouldBlockRange?: (date: Moment) => boolean;
}
declare const DatePicker: VibeComponent<DatePickerProps, HTMLElement>;
export default DatePicker;
