import React from "react";

function SearchBar({ search, handleSearch }) {
  return (
    <input
      type="text"
      placeholder="Search products"
      value={search}
      onChange={handleSearch}
    />
  );
}

export default SearchBar;
