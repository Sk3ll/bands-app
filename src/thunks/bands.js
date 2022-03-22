import axios from 'axios';
import { bandSuccess, bandFailure } from '../redux/actionHandlers/bandActionHanlders';

const searchUrl = `https://itunes.apple.com/search`;
const limit = 5;

const searchBands = (term) => async (dispatch) => {
  try {
    const url = new URL(searchUrl);
    url.search = new URLSearchParams({ limit, term });
    const {
      data: { results }
    } = await axios.get(url);

    const mappedResults = results.map(({ collectionName }) => collectionName);
    dispatch(bandSuccess(mappedResults));
  } catch (e) {
    dispatch(bandFailure(e.message));
  }
};

export default searchBands;
