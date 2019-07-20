import React from "react";
import "./SearchBox.css";

export const SearchBox = ({ handleSearch }) => (
  <input
    className="search"
    type="search"
    placeholder="Search..."
    onChange={handleSearch}
  />
);
