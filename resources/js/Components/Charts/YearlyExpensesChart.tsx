import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts";
import { ConvertIntoMonth } from "../../Utils/FormatDate";
import LoadingTable from "../LoadingTable";
import { OverAllExpensesProps } from "@/types/hooks/fetch";
export default function YearlyExpensesChart() {
    const [loading, setLoading] = useState<boolean>(true);
    const [expenses, setExpenses] = useState<OverAllExpensesProps[]>([]);
    const fetchYearlySales = async () => {
        setLoading(true);
        await fetch(route("expenses.api.yearly"), {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setExpenses(data.data);
                setLoading(false);
            })
            .catch((error) => {
                throw new Error(error);
            });
    };
    useEffect(() => {
        fetchYearlySales();
    }, []);
    const x = expenses.map((expense) => {
        return ConvertIntoMonth(expense.month);
    });

    const y = expenses.map((expense) => {
        return expense.total_expense;
    });
    return (
        <React.Fragment>
            {loading ? (
                <LoadingTable />
            ) : (
                <div className="text-black">
                    <LineChart
                        title="Overall Sales This Year"
                        xAxis={[{ data: x, scaleType: "point" }]}
                        series={[
                            {
                                data: y,
                                color: "#d12b26",
                                label: "Expense",
                            },
                        ]}
                        height={300}
                        margin={{
                            left: 100,
                        }}
                    />
                </div>
            )}
        </React.Fragment>
    );
}
