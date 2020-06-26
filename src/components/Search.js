import React, { useState } from 'react';

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(e) {
    setSearchTerm(e.target.value);
    // B
    props.onSearch(e);
  }

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input onChange={handleChange} id="search" type="text" />
      <p>
        Searching for <strong>{searchTerm}</strong>.
      </p>
    </div>
  );
};

export default Search;
