/* eslint-disable class-methods-use-this, consistent-return */
import axios from 'axios';
import { bandRequest, bandSuccess, bandFailure } from '../tools/actionHandlers/bandActionHanlders';

class BandsService {
  searchUrl = `https://itunes.apple.com/search`;

  minimalIndex = 5;

  products;

  searchBands = (term) => async (dispatch) => {
    dispatch(bandRequest());
    try {
      const url = `${this.searchUrl}?term=${term}`;
      const response = await axios.get(url);

      console.log('fetch', response);
      this.products = response.results;

      dispatch(bandSuccess(this.getProducts()));
    } catch (e) {
      dispatch(bandFailure(e.message));
    }
  };

  getProducts = () =>
    this.products.filter((_, index) => this.isMinimalItems(index)).map(this.getCollectionName);

  searchProducts = (searchParams) =>
    this.products
      .filter((product, index) => product.includes(searchParams) && this.isMinimalItems(index))
      .map(this.getCollectionName);

  isMinimalItems = (currentIndex) => currentIndex < this.minimalIndex;

  getCollectionName = ({ collectionName }) => collectionName;
}

export default new BandsService();
