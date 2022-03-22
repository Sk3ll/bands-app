import axios from 'axios';
import { bandRequest, bandSuccess, bandFailure } from '../redux/actionHandlers/bandActionHanlders';

class BandsService {
  searchUrl = `https://itunes.apple.com/search`;

  limit = 5;

  searchBands = (term) => async (dispatch) => {
    dispatch(bandRequest());
    try {
      const url = new URL(this.searchUrl);
      url.search = new URLSearchParams({ limit: this.limit, term });
      const {
        data: { results }
      } = await axios.get(url);

      const mappedResults = results.map(({ collectionName }) => collectionName);
      dispatch(bandSuccess(mappedResults));
    } catch (e) {
      dispatch(bandFailure(e.message));
    }
  };
}

export default new BandsService();
