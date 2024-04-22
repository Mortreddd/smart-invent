import React from "react";
import { ConvertIntoMonth } from "@/Utils/FormatDate";
import LoadingTable from "../LoadingTable";
import useFetch from "@/Hooks/useFetch";
import LineChartComponent from "./LineChartComponent";
import DisplayError from "../DisplayError";

interface OverAllExpensesProps {
    total_expense: number;
    month: number;
    year: number;
}

export default function YearlyExpensesChart() {
    const { isError, isLoading, data } = useFetch<OverAllExpensesProps>({
        url: "expenses.api.yearly",
    });
    const expenses = data;

    const x = expenses?.map((expense) => {
        return ConvertIntoMonth(expense.month);
    });

    const series = expenses?.map((expense) => {
        return expense.total_expense;
    });
    return (
        <React.Fragment>
            {isLoading && <LoadingTable />}
            {isError && <DisplayError />}
            {expenses && (
                <div className="text-black">
                    <LineChartComponent
                        title="Overall Sales This Year"
                        xAxis={x}
                        series={[
                            {
                                data: series,
                                color: "#d12b26",
                                label: "Expense",
                            },
                        ]}
                        height={300}
                    />
                </div>
            )}
        </React.Fragment>
    );
}
