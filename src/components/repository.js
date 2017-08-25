import React from 'react';

const Repository = ({repository}) => {

  const title = repository;

  return (
      <li className="collection-item">
        <p>{title}</p>
      </li>
  );
};

export default Repository;