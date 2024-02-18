'use client';

import React, { useState } from "react";
import SearchBar from "./compnents/SearchBar";
import Table from "./compnents/Table";
import Header from "./compnents/Header";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCriteria, setFilterCriteria] = useState({ status: "All", category: "All" });


  const handleFilterChange = (criteria: React.SetStateAction<{ status: string; category: string; }>) => {
    setFilterCriteria(criteria);
  };

  const handleSearch = (searchQuery: React.SetStateAction<string>) => {
    setSearchTerm(searchQuery);
  };

  return (
    <main>
       <Header/>
       <SearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />
      <Table searchTerm={searchTerm} filterCriteria={filterCriteria} />
    </main>
  );
};

export default Home;
