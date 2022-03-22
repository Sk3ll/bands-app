import React from 'react';
import { Provider } from 'react-redux';
import { WrapContainer } from './components/Common';
import ListOfProductsContainer from './containers/ListOfProducts';
import SearchBarContainer from './containers/SearchBar';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <WrapContainer>
      <SearchBarContainer />
      <ListOfProductsContainer />
    </WrapContainer>
  </Provider>
);

export default App;
