import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../store/contactsSlice';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <label htmlFor="filter">Filter contacts by name: </label>
      <input
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default Filter;
