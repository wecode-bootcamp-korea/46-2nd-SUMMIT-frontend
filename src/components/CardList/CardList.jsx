import React from 'react';
import Card from '../Card/Card.jsx';
const CardList = ({ showList, rerender }) => {
  return (
    <>
      {showList.map(show => (
        <Card key={show.id} show={show} rerender={rerender} />
      ))}
    </>
  );
};

export default CardList;
