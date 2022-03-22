import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import SearchBarComponent from '../components/SearchBar';
import BandsService from '../services/bandsService';
import { GlobalDispatch } from '../redux/reducers/bandReducer';

function SearchBarContainer() {
  const dispatch = useContext(GlobalDispatch);
  const { handleSubmit, control } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      searchBand: ''
    }
  });

  const submit = ({ searchBand }) => {
    dispatch(BandsService.searchBands(searchBand));
  };

  return <SearchBarComponent submit={submit} handleSubmit={handleSubmit} control={control} />;
}

export default SearchBarContainer;
