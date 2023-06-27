import React, { useEffect, useState } from 'react';
import { CheckImg, CheckedImg } from './Drop';
import { useSearchParams } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
const Drop = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  // useEffect(() => {
  //   searchParams.delete('genre');
  //   searchParams.delete('region');
  //   searchParams.delete('sort');
  //   setSearchParams(searchParams);
  // }, []);

  useEffect(() => {});

  const handleAppendOnClick = () => {
    if (!searchParams.getAll(item.filter).includes(String(item.id))) {
      searchParams.append(item.filter, item.id);
      setSearchParams(searchParams);
    } else {
      const newArr = searchParams
        .getAll(item.filter)
        .filter(el => el !== String(item.id));
      searchParams.delete(item.filter);
      newArr.forEach(el => {
        searchParams.append(item.filter, el);
      });
      setSearchParams(searchParams);
    }
  };

  const handleCheckedChange = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <div
      onClick={() => {
        handleCheckedChange();
        handleAppendOnClick();
      }}
    >
      {isChecked ? <CheckedImg /> : <CheckImg />}
      {item.list}
    </div>
  );
};

export default Drop;
