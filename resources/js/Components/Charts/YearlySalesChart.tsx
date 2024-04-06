import React, { useEffect, useState } from "react";
import { LineChart } from "@mui/x-charts";
import LoadingTable from "../LoadingTable";
import { ConvertIntoMonth } from "../../Utils/FormatDate";
import { OverAllSalesProps } from "@/types/hooks/fetch";

export default function YearlySalesChart() {
    const [loading, setLoading] = useState<boolean>(true);
    const [sales, setSales] = useState<OverAllSalesProps[]>([]);

    async function getResult() {
        await fetch(route("sales.api.yearly"), {
            method: "GET",
            headers: {
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                setSales(data.data);
            })
            .catch((error) => {
                setLoading(true);
                throw new Error(error);
            });
    }
    useEffect(() => {
        getResult();
    }, []);

    const x = sales.map((sale) => {
        return ConvertIntoMonth(sale.month);
    });
    const y = sales.map((sale) => {
        return sale.total_earned;
    });
    return (
        <React.Fragment>
            {loading && !sales ? (
                <LoadingTable />
            ) : (
                <div className="text-black">
                    <LineChart
                        title="Overall Sales This Year"
                        xAxis={[{ data: x, scaleType: "point" }]}
                        series={[
                            {
                                data: y,
                                color: "#92d96c",
                                label: "Overall Sales",
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
