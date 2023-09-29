"use client";

import React, { useMemo, useState } from "react";
import { TfiSearch } from "react-icons/tfi";
import { data } from "@/utils/data";
import { getSearchedData } from "@/utils/searchData";
import { getSortedData } from "@/utils/sortData";
import { Pagination } from "./Pagination";

export function DataTable() {
  const itemsPerPage = 8;
  const [itemOffset, setItemOffset] = useState(0);
  const [serachText, setSearchText] = useState("");
  const [sortBy, setSortBy] = useState("new");
  const searchedResult = useMemo(
    () => getSearchedData(data, serachText),
    [serachText]
  );
  const sortedData = useMemo(
    () => getSortedData(searchedResult, sortBy),
    [searchedResult, sortBy]
  );

  const endOffset = itemOffset + itemsPerPage;
  const paginatedData = sortedData.slice(itemOffset, endOffset);

  return (
    <div className="py-7 bg-white mt-8 rounded-3xl mb-8">
      <div className="flex items-end justify-between px-8">
        <h5 className="text-[#16C098] text-sm">Active Members</h5>
        <div className="flex gap-4">
          <div className="w-56 flex items-center bg-[#F9FBFF] px-3 py-2 rounded-xl gap-2">
            <TfiSearch className="w-6 h-6" />
            <input
              type="text"
              placeholder="Search"
              className="w-full text-xs bg-transparent outline-none"
              value={serachText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-40 bg-[#F9FBFF] px-2 py-3.5 rounded-xl text-xs text-[#7E7E7E] outline-none"
            >
              <option value={"new"}>Sort By: Newest</option>
              <option value={"old"}>Sort By: Oldest</option>
              <option value={"active"}>Sort By: Active</option>
              <option value={"inactive"}>Sort By: Inactive</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle">
            <div className="overflow-hidden mx-8">
              <table className="min-w-full">
                <thead className="border-b divide-[#EFF0F6]">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 text-left text-sm font-medium text-[#B5B7C0]"
                    >
                      Customer Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-[#B5B7C0]"
                    >
                      Company
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-[#B5B7C0]"
                    >
                      Phone Number
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-[#B5B7C0]"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-[#B5B7C0]"
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-center text-sm font-medium text-[#B5B7C0]"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EFF0F6]">
                  {paginatedData.length === 0 && (
                    <p className="text-slate-800 text-sm py-3">
                      No Data to Display
                    </p>
                  )}
                  {paginatedData.map((item) => (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap py-4 text-sm font-medium text-[#292D32]">
                        {item.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-[#292D32]">
                        {item.company}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-[#292D32]">
                        {item.phone}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-[#292D32]">
                        {item.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-[#292D32]">
                        {item.country}
                      </td>
                      <td className="whitespace-nowrap px-3 flex items-center justify-center py-4 text-sm font-medium text-[#292D32]">
                        <span
                          className={`w-20 p-1 rounded-md text-center border ${
                            item.status === "Active"
                              ? "bg-[#16C09861] text-[#008767] border-[#00B087]"
                              : "bg-[#FFC5C5] text-[#DF0404] border-[#DF0404]"
                          }`}
                        >
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {paginatedData.length !== 0 && (
          <Pagination
            itemsPerPage={itemsPerPage}
            itemOffset={itemOffset}
            endOffset={endOffset}
            length={sortedData.length}
            setItemOffset={setItemOffset}
          />
        )}
      </div>
    </div>
  );
}
