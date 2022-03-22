import React, { useEffect, useState, useContext } from 'react';
import ListOfProductsComponent from '../components/ListOfProducts';
import rotatePosition from '../utils/rotatePosition';
import { GlobalState } from '../redux/reducers/bandReducer';

function ListOfProductsContainer() {
  const { data } = useContext(GlobalState);
  const [products, setProducts] = useState(['A', 'B', 'C', 'D', 'F']);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProducts(rotatePosition(products, data));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [products, data]);

  return <ListOfProductsComponent products={products} />;
}

export default ListOfProductsContainer;
