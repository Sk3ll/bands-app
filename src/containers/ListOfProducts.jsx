import React, { useEffect, useState } from 'react';
import ListOfProductsComponent from '../components/ListOfProducts';
import rotatePosition from '../utils/rotatePosition';
import useBandReducer from '../tools/reducers/bandReducer';

function ListOfProductsContainer() {
  const [{ data }] = useBandReducer();
  const [products, setProducts] = useState(['A', 'B', 'C', 'D', 'F']);

  useEffect(() => {
    setProducts(rotatePosition([...products, ...data]));
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(rotatePosition(products));
    }, 1000);
  }, [products]);

  return <ListOfProductsComponent products={products} />;
}

export default ListOfProductsContainer;
