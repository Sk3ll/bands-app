import React from 'react';
import SearchBarComponent from '../components/SearchBar';
import BandsService from '../services/bandsService';
import useBandReducer from '../tools/reducers/bandReducer';

function SearchBarContainer() {
  const [, dispatch] = useBandReducer();

  const handleSubmit = (input) => {
    console.log(input);
    dispatch(BandsService.searchBands(input));
  };

  return <SearchBarComponent submit={handleSubmit} />;
}

export default SearchBarContainer;
