import React from "react";
import { HiPlus } from "react-icons/hi";
import { CustomerCharts } from "./CustomerCharts";
import { StatsOverview } from "./StatsOverview";
import { DataTable } from "./DataTable";

export function Main() {
  return (
    <div className="w-full px-10">
      <div className="flex items-center justify-between border-b pb-9 pt-10">
        <h3 className="text-2xl font-bold">Orders</h3>
        <button className="flex items-center justify-center gap-1 rounded-lg px-3 py-2 bg-[#1B59F8] text-white">
          <HiPlus className="w-6 h-6" />
          <span className="text-sm font-semibold">Add Order</span>
        </button>
      </div>
      <div className="flex gap-5 mt-8">
        <CustomerCharts />
        <StatsOverview />
      </div>
      <DataTable />
    </div>
  );
}
