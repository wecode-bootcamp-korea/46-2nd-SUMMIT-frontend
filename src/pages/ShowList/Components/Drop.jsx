import React, { useEffect, useState } from 'react';
import { CheckImg, CheckedImg } from './Drop';
import { useSearchParams } from 'react-router-dom';
const Drop = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const { filter, id, list } = item;

  useEffect(() => {
    const genreParam = searchParams.getAll(filter);
    const isSelected = genreParam.includes(String(id));
    setIsChecked(isSelected);
  }, [searchParams, filter, id]);

  const handleAppendOnClick = () => {
    if (!searchParams.getAll(filter).includes(String(id))) {
      searchParams.append(filter, id);
      setSearchParams(searchParams);
    } else {
      const newArr = searchParams
        .getAll(filter)
        .filter(el => el !== String(id));
      searchParams.delete(filter);
      newArr.forEach(el => {
        searchParams.append(filter, el);
      });
      setSearchParams(searchParams);
    }
  };
  console.log('hi');

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
      {list}
    </div>
  );
};

export default Drop;
