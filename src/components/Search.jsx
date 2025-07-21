import React from "react";

const Search = ({ searchTerms, setSearchTerms }) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search" />

        <input
          type="text"
          placeholder="Search though thousands of movies"
          value={searchTerms}
          onChange={(e) => setSearchTerms(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
