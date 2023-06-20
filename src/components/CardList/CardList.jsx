import React from 'react';
import Card from '../Card/Card.jsx';
const CardList = ({ showList }) => {
  return (
    <>
      {showList.map(show => (
        <Card key={show.id} show={show} />
      ))}
    </>
  );
};

export default CardList;
