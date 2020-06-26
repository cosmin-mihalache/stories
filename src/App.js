import React, { useState } from 'react';
import Search from './components/Search';
import List from './components/List';
import stories from './data/mock-data';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // A
  function handleSearch(e) {
    // C
    setSearchTerm(e.target.value);
  }

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <h1>Hello React</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={searchedStories} />
    </div>
  );
};

export default App;
