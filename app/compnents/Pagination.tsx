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
    <div className="container  mx-auto py-4 px-2 sm:px-6 flex items-center flex-col sm:flex-row">
      <div className="flex items-center">
        <h2 className="text-sm sm:text-lg font-semibold">Product Summary</h2>
      </div>

      <div className="  w-[40%] py-2 flex items-center justify-between m-auto border-black">
           <h2 className="items-center hidden sm:block "> Show  </h2>
           <button className="bg-blue-500 hidden sm:block text-sm rounded-md py-2 px-20 text-white sm:px-4">
               DISPATCH SELECTED
            </button>
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
                currentPage === number ? "bg-blue-500 px-4 text-white" :""
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
