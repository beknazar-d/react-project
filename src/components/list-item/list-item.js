import React from 'react';
import './list-item.css';

const ListItem = ({ name, salary, showId }) => {
  return (
    <li>
      <span>{name}</span>
      <span>{salary}</span>
      <button  onClick={showId}>Delete</button>
    </li>
  );
}

export default ListItem;
