import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ListOfProductsComponent from '../components/ListOfProducts';
import rotatePosition from '../utils/rotatePosition';

const ListOfProductsContainer = () => {
  const { data } = useSelector((state) => state);
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
};

export default ListOfProductsContainer;
