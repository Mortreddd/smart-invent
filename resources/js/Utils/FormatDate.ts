import { DAYS_NAME } from "./Constants";

const MONTHNAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export function MonthNameDayYear(timestamp: number): string {
    const date = new Date(timestamp);

    const monthName = MONTHNAMES[date.getMonth()];
    const dayNumber = date.getDate().toString().padStart(2, "0");
    const year = date.getFullYear();

    // Construct the formatted date string (MonthName-DayNumber-Year)
    const formattedDate = `${monthName}-${dayNumber}-${year}`;

    return formattedDate;
}

export function ConvertIntoMonth(month: number): string {
    return MONTHNAMES[month - 1];
}

export function ConvertDate(datetime: EpochTimeStamp): string {
    var now = new Date(datetime);
    return (
        DAYS_NAME[now.getDay()] +
        " " +
        MONTHNAMES[now.getMonth()] +
        " " +
        now.getDate() +
        " " +
        now.getFullYear()
    );
}
