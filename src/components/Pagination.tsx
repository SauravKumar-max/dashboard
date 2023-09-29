import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

type PaginationProps = {
  itemsPerPage: number;
  itemOffset: number;
  endOffset: number;
  length: number;
  setItemOffset: React.Dispatch<React.SetStateAction<number>>;
};

export function Pagination({
  itemsPerPage,
  itemOffset,
  endOffset,
  length,
  setItemOffset,
}: PaginationProps) {
  const pageCount = Math.ceil(length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % length;
    setItemOffset(newOffset);
  };

  return (
    <div className="flex items-center justify-between px-8 mt-6">
      <p className="text-sm text-[#B5B7C0]">
        Showing data {itemOffset + 1} to{" "}
        {length < endOffset ? length : endOffset} of {length} entries
      </p>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<MdNavigateNext className="text-[#404B52] text-sm" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel={<MdNavigateBefore className="text-[#404B52] text-sm" />}
        renderOnZeroPageCount={null}
        containerClassName="flex item-center gap-3"
        nextClassName="p-1 flex items-center justify-center border border-[#EFF0F6] bg-[#F5F5F5] rounded"
        previousClassName="p-1 flex items-center justify-center border border-[#EFF0F6] bg-[#F5F5F5] rounded"
        pageClassName="py-1 px-2 flex items-center justify-center border border-[#EFF0F6] bg-[#F5F5F5] rounded text-[#404B52] text-xs"
        activeClassName="active-page"
      />
    </div>
  );
}
