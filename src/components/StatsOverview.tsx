import React from "react";

export function StatsOverview() {
  return (
    <div className="w-full bg-white rounded-3xl py-8 px-9">
      <h4 className="text-xl font-semibold">Stats Overview</h4>
      <div className="mt-5">
        <div className="flex flex-col gap-1">
          <p className="text-[#A7A7A7] text-sm font-semibold">Active</p>
          <div className="relative">
            <span className="block w-full h-2 rounded bg-[#eee]"></span>
            <span className="absolute top-0 left-0 w-[63%] h-2 rounded bg-[#16C09861]"></span>
          </div>
          <p className="text-[#A7A7A7] text-sm font-semibold flex justify-end">
            63%
          </p>
        </div>
        <div className="flex flex-col gap-1 mt-7">
          <p className="text-[#A7A7A7] text-sm font-semibold">Inactive</p>
          <div className="relative">
            <span className="block w-full h-2 rounded bg-[#eee]"></span>
            <span className="absolute top-0 left-0 w-[88%] h-2 rounded bg-[#FF6B6B]"></span>
          </div>
          <p className="text-[#A7A7A7] text-sm font-semibold flex justify-end">
            88%
          </p>
        </div>
      </div>
    </div>
  );
}
