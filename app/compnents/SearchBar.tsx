import React, { useState } from "react";
import { GoSearch } from "react-icons/go";


const SearchBar = ({ onSearch,onFilterChange  }:any) => {
  const [status, setStatus] = useState("All");
  const [category, setCategory] = useState("All");

  const handleInputChange = (e:any) => {
    const searchQuery = e.target.value;
    onSearch(searchQuery);
  };
  const handleStatusChange = (e: { target: { value: any; }; }) => {
    const selectedStatus = e.target.value;
    setStatus(selectedStatus);
    onFilterChange({ status: selectedStatus, category });
  };

  const handleCategoryChange = (e: { target: { value: any; }; }) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    onFilterChange({ status, category: selectedCategory });
  };



  return (
    <div className=" w-[100%] m-auto py-2 border-black">

      <div className="flex w-[90%] shadow-lg rounded-lg px-4 m-auto py-4 border-2 flex-col sm:flex-row items-center">
       
        {/* Search Bar */}

        <div className="w-[100%]  sm:w-1/3">
          <label htmlFor="search" className="block py-2 px-2 text-sm font-semibold mb-1">
             What are you looking for ?
          </label>
          <div className="relative">
            <input
              type="text"
              id="search"
              placeholder="Search for name"
              onChange={handleInputChange}
              className="w-full py-2 px-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
            />
            <GoSearch
              className="h-6 w-6 absolute left-3 top-2 text-gray-400 pointer-events-none"
             />
           
          </div>
        </div>

        {/* Category Dropdown */}

        <div className="w-[100%] sm:ml-4 sm:w-1/4">
          <label htmlFor="category" className="block py-2 px-2 text-sm font-semibold mb-1">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
          >
            <option value="All">All</option>
            <option value="UPS">UPS</option>
            <option value="FedEx">FedEx </option>
            <option value="DHL">DHL </option>
          </select>
        </div>

        {/* Status Dropdown */}

        <div className=" w-[100%] sm:ml-4 sm:w-1/4">
          <label htmlFor="status" className="block py-2 px-2 text-sm font-semibold mb-1">
            Status
          </label>
          <select
            id="status"
            value={status}
            onChange={handleStatusChange}
            className="w-full py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
          >
            <option value="All">All</option>
            <option value="Pending">Pending</option>
            <option value="Delivered">Delivered</option>
            <option value="Shipped">Shipped</option>
          </select>
        </div>

        {/* Search Button */}
        <button className=" sm:ml-8   mt-4 sm:mt-10 px-20 sm:px-8 py-2  bg-blue-500 text-white rounded-lg focus:outline-none hover:bg-blue-600">
          Search
        </button>

      </div>
    </div>
  );
};

export default SearchBar;
