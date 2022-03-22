import React from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from '@mui/material';
import { Controller } from 'react-hook-form';
import { FormContainer } from './Common';

const SearchBar = ({ submit, control }) => (
  <FormContainer onSubmit={submit}>
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
    <Button type="submit" variant="contained" onClick={submit}>
      Search
    </Button>
  </FormContainer>
);

SearchBar.propTypes = {
  submit: PropTypes.func.isRequired,
  control: PropTypes.object.isRequired
};

export default SearchBar;
