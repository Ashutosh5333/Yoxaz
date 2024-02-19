import React, { useEffect, useState } from 'react';
import { data } from "../../context/index";
import ProductSummaryWithPagination from './Pagination';

const Table = ({ searchTerm ,filterCriteria }:any) => {
  const [filteredData, setFilteredData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {

    let filtered = data.filter((item) => {
        const customerMatch = item.customer.toLowerCase().includes(searchTerm.toLowerCase());
         const countryMatch = item.country.toLowerCase().includes(searchTerm.toLowerCase());
        return customerMatch  || countryMatch;
    });

    if (filterCriteria.status !== 'All') {
        filtered = filtered.filter((item) => item.status === filterCriteria.status);
      }
  
      if (filterCriteria.category !== 'All') {
        filtered = filtered.filter((item) => item.shipping === filterCriteria.category);
      }
  
      setFilteredData(filtered);
  }, [searchTerm,filterCriteria]);

 const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);



  return (
      <>
    <ProductSummaryWithPagination
        itemsPerPage={itemsPerPage}
        totalItems={filteredData.length}
        paginate={paginate}
        currentPage={currentPage}
      />

    <div className="flex w-[90%] shadow-lg rounded-lg px-4 m-auto py-2 border-2 flex-col md:flex-row items-center">


      <div className="w-[100%] m-auto overflow-scroll">
        <table className="min-w-full   px-2 divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-[.6rem] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-[.6rem] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">
                SHOPIFY
              </th>
              <th scope="col" className="px-6 py-3 text-left text-[.6rem] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">
                STATUS
              </th>
              <th scope="col" className="px-6 py-3 text-left text-[.6rem] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">
                CUSTOMER
              </th>
              <th scope="col" className="px-6 py-3 text-left text-[.6rem] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">
                EMAIL
              </th>
              <th scope="col" className="px-6 py-3 text-left text-[.6rem] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">
                COUNTRY
              </th>
              <th scope="col" className="px-6 py-3 text-left text-[.6rem] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">
                SHIPPING 
              </th>
              <th scope="col" className="px-6 py-3 text-left text-[.6rem] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">
                SOURCE
              </th>
              <th scope="col" className="px-6 py-3 text-left text-[.6rem] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">
                ORDER TYPE
              </th>
              <th scope="col" className="px-6 py-3 text-left text-[.6rem] sm:text-xs font-medium text-gray-500 uppercase tracking-wider">
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.length>0 && currentItems?.map((item, index) => (
              <tr key={index} className='text-sm'>
                <td className="px-6 py-4 font-sm text-gray-500 whitespace-nowrap">{item.id}</td>
                <td className="px-6 py-4  text-gray-500 whitespace-nowrap">{item.shopifyDate}</td>
                <td className="px-6 py-4  text-gray-500 whitespace-nowrap">{item.status}</td>
                <td className="px-6 py-4 text-gray-500  whitespace-nowrap">{item.customer}</td>
                <td className="px-6 py-4 text-gray-500  whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 text-gray-500  whitespace-nowrap">{item.country}</td>
                <td className="px-6 py-4 text-gray-500  whitespace-nowrap">{item.shipping}</td>
                <td className="px-6 py-4 text-gray-500  whitespace-nowrap">{item.source}</td>
                <td className="px-6 py-4 text-gray-500  whitespace-nowrap">Online</td>
                <td className="px-6 py-4 text-gray-500  whitespace-nowrap">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};

export default Table;
