import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import SearchBarComponent from '../components/SearchBar';
import searchBands from '../services/bandsService';

const SearchBarContainer = () => {
  const dispatch = useDispatch();
  const { handleSubmit, control } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      searchBand: ''
    }
  });

  const submit = ({ searchBand }) => {
    dispatch(searchBands(searchBand));
  };

  return <SearchBarComponent submit={handleSubmit(submit)} control={control} />;
};

export default SearchBarContainer;
