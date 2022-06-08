import React from 'react';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filter } from 'redux/contacts/filter-slice';
// import { getFilterSelector } from '../../redux/contacts/items-selectors';
import { itemsSelectors } from 'redux/contacts';
export default function Filter() {
  const value = useSelector(itemsSelectors.getFilterSelector);

  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(filter(e.target.value));
    console.log();
  };
  return (
    <label className={s.label}>
      Filter
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={s.input}
      />
    </label>
  );
}
