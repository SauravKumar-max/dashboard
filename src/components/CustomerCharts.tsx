"use client";

import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function CustomerCharts() {
  return (
    <div className="bg-white rounded-3xl py-8 px-9">
      <h4 className="text-xl font-semibold">All Customers</h4>
      <div className="flex items-center gap-12 mt-6">
        <div className="flex flex-col items-center gap-2">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={85}
              text="85%"
              styles={{
                text: { fontSize: "1.5rem", fontWeight: 700, fill: "#5F27CD" },
                path: {
                  stroke: "#5F27CD",
                },
              }}
            />
          </div>
          <p className="text-sm font-semibold text-[#A7A7A7] whitespace-nowrap">
            Current Customers
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={66}
              text="66%"
              styles={{
                text: {
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  fill: "#16C09861",
                },
                path: {
                  stroke: "#16C09861",
                },
              }}
            />
          </div>
          <p className="text-sm font-semibold text-[#A7A7A7] whitespace-nowrap">
            New Customers
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={90}
              text="90%"
              styles={{
                text: { fontSize: "1.5rem", fontWeight: 700, fill: "#FF6B6B" },
                path: {
                  stroke: "#FF6B6B",
                },
              }}
            />
          </div>
          <p className="text-sm font-semibold text-[#A7A7A7] whitespace-nowrap">
            Target Customers
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={30}
              text="30%"
              styles={{
                text: { fontSize: "1.5rem", fontWeight: 700, fill: "#FFC5C5" },
                path: {
                  stroke: "#FFC5C5",
                },
              }}
            />
          </div>
          <p className="text-sm font-semibold text-[#A7A7A7] whitespace-nowrap">
            Retarget Customers
          </p>
        </div>
      </div>
    </div>
  );
}
