import React from 'react';
import './list.css';
import ListItem from '../list-item/list-item'

const List = ({ employees, showId }) => {
  const elements = employees.map((el) => {
    const { id, ...otherProps } = el;
    return <ListItem key={id} {...otherProps} showId={() => showId(id)} />;
  });

  return (
    <ul>
      {elements}
    </ul>
  );
}

export default List;
