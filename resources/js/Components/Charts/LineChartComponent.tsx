import React from "react";
import { LineChart } from "@mui/x-charts";

interface LineChartProps {
    xAxis: any;
    series: Array<{ data: any; color?: string; label?: string }>;
    title?: string;
    height?: number;
    width?: number;
}
export default function LineChartComponent({
    xAxis,
    series,
    height,
    title,
    width,
}: LineChartProps) {
    return (
        <React.Fragment>
            <LineChart
                title={title}
                xAxis={[{ data: xAxis, scaleType: "point" }]}
                series={series}
                height={height}
                width={width}
                margin={{
                    left: 100,
                }}
            />
        </React.Fragment>
    );
}
