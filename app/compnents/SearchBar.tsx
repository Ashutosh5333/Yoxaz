import React from "react";
import { GoSearch } from "react-icons/go";


const SearchBar = () => {


  return (
    <div className="border-2 w-[100%] m-auto py-2 border-black">

      <div className="flex w-[90%] shadow-lg rounded-lg px-4 m-auto py-2 border-2 flex-col md:flex-row items-center">
        {/* Search Bar */}

        <div className="md:w-1/3">
          <label htmlFor="search" className="block px-2 text-sm font-semibold mb-1">
            Search Bar
          </label>
          <div className="relative">
            <input
              type="text"
              id="search"
              placeholder="Search..."
              className="w-full py-2 px-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            />
            <GoSearch
              className="h-6 w-6 absolute left-3 top-2 text-gray-400 pointer-events-none"
             />
           
          </div>
        </div>

        {/* Category Dropdown */}
        <div className="md:ml-4 md:w-1/4">
          <label htmlFor="category" className="block px-2 text-sm font-semibold mb-1">
            Category
          </label>
          <select
            id="category"
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
          >
            <option value="category1">All</option>
            <option value="category2">Category 2</option>
            <option value="category1">Category 1</option>
            <option value="category2">Category 2</option>
          </select>
        </div>

        {/* Status Dropdown */}
        <div className="md:ml-4 md:w-1/4">
          <label htmlFor="status" className="block px-2 text-sm font-semibold mb-1">
            Status
          </label>
          <select
            id="status"
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Running">Running</option>
            <option value="Rejected">Rejected </option>
          </select>
        </div>

        {/* Search Button */}
        <button className="md:ml-2   mt-4 md:mt-6 px-8 py-2  bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
