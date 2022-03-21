/* eslint-disable import/no-extraneous-dependencies, react/no-array-index-key, import/named, react/jsx-props-no-spreading */
import React from 'react';
// import PropTypes from 'prop-types';

import { Button, Input } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import { FormContainer } from './Common';

// eslint-disable-next-line react/prop-types
function SearchBar({ submit }) {
  const methods = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      searchBand: ''
    }
  });

  const { handleSubmit } = methods;

  return (
    <FormContainer onSubmit={handleSubmit(submit)}>
      <FormProvider {...methods}>
        <Input name="search" aria-label="Searching band name" label="Searching band" />
      </FormProvider>
      <Button type="submit" variant="contained" onClick={handleSubmit(submit)}>
        Search
      </Button>
    </FormContainer>
  );
}

export default SearchBar;
