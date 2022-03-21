/* eslint-disable class-methods-use-this, consistent-return */
import axios from 'axios';
import { bandRequest, bandSuccess, bandFailure } from '../tools/actionHandlers/bandActionHanlders';

class BandsService {
  searchUrl = `https://itunes.apple.com/search`;

  limit = 5;

  products;

  searchBands = (term) => async (dispatch) => {
    dispatch(bandRequest());
    try {
      const url = new URL(this.searchUrl);
      url.search = new URLSearchParams({ limit: this.limit, term });
      const {
        data: { results }
      } = await axios.get(url);

      this.products = results;
      dispatch(bandSuccess(this.getProducts()));
    } catch (e) {
      dispatch(bandFailure(e.message));
    }
  };

  getProducts = () =>
    this.products
      .filter(({ collectionName }, index) => collectionName && this.isMinimalItems(index))
      .map(this.getCollectionName);

  isMinimalItems = (currentIndex) => currentIndex < this.limit;

  getCollectionName = ({ collectionName }) => collectionName;
}

export default new BandsService();
