import React from 'react';
import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
import { Container, StackItem } from './Common';

function ListOfProductsComponent({ products }) {
  return (
    <Container>
      <Stack spacing={2}>
        {products.length ? (
          products.map((productName, index) => (
            <StackItem key={productName + index}>{productName}</StackItem>
          ))
        ) : (
          <StackItem>Not Found</StackItem>
        )}
      </Stack>
    </Container>
  );
}

ListOfProductsComponent.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string)
};

ListOfProductsComponent.defaultProps = {
  products: []
};

export default ListOfProductsComponent;
