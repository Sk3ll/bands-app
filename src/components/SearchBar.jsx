import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from '@mui/material';
import { Controller } from 'react-hook-form';
import { FormContainer } from './Common';

function SearchBar({ submit, handleSubmit, control }) {
  return (
    <FormContainer onSubmit={handleSubmit(submit)}>
      <Controller
        shouldUnregister
        name="searchBand"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <Input
            type="input"
            placeholder="Search Band"
            aria-label="Searching band name"
            label="Searching band"
            value={value}
            onChange={onChange}
          />
        )}
      />
      <Button type="submit" variant="contained" onClick={handleSubmit(submit)}>
        Search
      </Button>
    </FormContainer>
  );
}

SearchBar.propTypes = {
  submit: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  control: PropTypes.func.isRequired
};

export default SearchBar;
