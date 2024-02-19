import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const ProductSummaryWithPagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}: any) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="container w-[90%] mx-auto py-4 px-6 flex items-center justify-between">
      <div className="flex items-center">
        <h2 className="text-lg font-semibold">Product Summary</h2>
      </div>
      <div className="flex items-center">
        <div
          className={`mr-2 p-2 rounded-md  focus:outline-none ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={() => currentPage !== 1 && paginate(currentPage - 1)}
        >
         
          <IoIosArrowBack />
        </div>

        <div className="flex">
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={`mr-2 p-2 rounded-md focus:outline-none ${
                currentPage === number ? "bg-blue-500 text-white" :""
              }`}
              onClick={() => paginate(number)}
            >
              {number}
            </button>
          ))}
        </div>
        <div
          className={`p-2 rounded-md focus:outline-none ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={() =>
            currentPage !== totalPages && paginate(currentPage + 1)
          }
        >
         
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default ProductSummaryWithPagination;
