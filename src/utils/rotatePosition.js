const rotatePosition = (products) => {
  const firstElement = products.shift();
  return [...products, firstElement];
};

export default rotatePosition;
