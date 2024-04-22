import React from "react";
import LoadingTable from "../LoadingTable";
import { ConvertIntoMonth } from "@/Utils/FormatDate";
import useFetch from "@/Hooks/useFetch";
import DisplayError from "../DisplayError";
import LineChartComponent from "./LineChartComponent";
interface OverAllSalesProps {
    total_earned: number;
    month: number;
    year: number;
}
export default function YearlySalesChart() {
    const { isError, isLoading, data } = useFetch<OverAllSalesProps>({
        url: "sales.api.yearly",
    });

    const sales: OverAllSalesProps[] | null = data;
    const x = sales?.map((sale) => {
        return ConvertIntoMonth(sale.month);
    });
    const series = sales?.map((sale) => {
        return sale.total_earned;
    });
    return (
        <React.Fragment>
            {isLoading && <LoadingTable />}
            {isError && <DisplayError />}
            {sales && (
                <LineChartComponent
                    xAxis={x}
                    series={[
                        {
                            data: series,
                            color: "#92d96c",
                            label: "Overall Sales",
                        },
                    ]}
                    title={"Overall Sales This Year"}
                    height={300}
                />
            )}
        </React.Fragment>
    );
}
