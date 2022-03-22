const rotatePosition = (renderProducts, apiProducts) => {
  const firstRenderElement = renderProducts.shift();
  const firstApiElement = apiProducts.length && apiProducts.shift();
  return [...renderProducts, firstApiElement || firstRenderElement];
};

export default rotatePosition;
