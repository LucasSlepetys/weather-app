import React from 'react';
import { getContext } from '../Context';

const Search = () => {
  const { setSearch } = getContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(e.target.elements.search.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='City' name='search' />
    </form>
  );
};

export default Search;
