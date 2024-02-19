import React from "react";

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
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M6.293 5.293a1 1 0 0 1 1.414 1.414L4.414 11H16a1 1 0 1 1 0 2H4.414l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="flex">
          {pageNumbers.map((number) => (
            <button
              key={number}
              className={`mr-2 p-2 rounded-md focus:outline-none ${
                currentPage === number 
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
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M13.707 14.293a1 1 0 0 1-1.414 1.414L15.586 11H4a1 1 0 1 1 0-2h11.586l-3.293-3.293a1 1 0 0 1 1.414-1.414l5 5a1 1 0 0 1 0 1.414l-5 5z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductSummaryWithPagination;
