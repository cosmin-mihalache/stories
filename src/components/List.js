import React from 'react';

const List = ({ list }) =>
  list.map((item) => <Item key={item.objectID} item={item} />);

const Item = ({ item }) => (
  <div>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span> {item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </div>
);
export default List;
