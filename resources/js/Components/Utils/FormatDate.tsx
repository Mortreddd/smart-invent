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
