import React from 'react';
import Search from './components/Search';
import List from './components/List';
import stories from './data/mock-data';

const App = () => {
  // A
  function handleSearch(e) {
    // C
    console.log(e.target.value);
  }

  return (
    <div>
      <h1>Hello React</h1>
      <Search onSearch={handleSearch} />
      <hr />
      <List list={stories} />
    </div>
  );
};

export default App;
