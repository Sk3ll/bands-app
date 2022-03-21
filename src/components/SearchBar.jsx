/* eslint-disable import/no-extraneous-dependencies, react/no-array-index-key, import/named, react/jsx-props-no-spreading */
import React from 'react';
// import PropTypes from 'prop-types';

import { Input, Button } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { FormContainer } from './Common';

function SearchBar() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      searchBand: ''
    }
  });
  const onSubmit = (data) => console.log(data);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Controller name="firstName" control={control} render={({ field }) => <Input {...field} />} />
      <Button type="submit" variant="contained">Search</Button>
    </FormContainer>
  );
}

export default SearchBar;
