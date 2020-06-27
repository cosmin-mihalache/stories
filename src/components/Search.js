import React from 'react';

const Search = (props) => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        value={props.search}
        onChange={props.onSearch}
        id="search"
        type="text"
      />
    </div>
  );
};

export default Search;
