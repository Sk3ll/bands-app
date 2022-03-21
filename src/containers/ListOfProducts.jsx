import React, { useEffect, useState } from 'react';
import ListOfProductsComponent from '../components/ListOfProducts';
import BandsService from '../services/bandsService';
import rotatePosition from '../utils/rotatePosition';
import useBandReducer from "../tools/reducers/bandReducer";

function ListOfProductsContainer() {
  const [{ data }, dispatch] = useBandReducer();
  const [products, setProducts] = useState(['A', 'B', 'C', 'D', 'F']);

  useEffect(() => {
    dispatch(BandsService.searchBands('radiohead'));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setProducts(rotatePosition([...products, ...data]));
      // setProducts(rotatePosition(products));
    }, 1000);
  }, [products]);

  return <ListOfProductsComponent products={products} />;
}

export default ListOfProductsContainer;
