import React from 'react';
import ListOfProductsContainer from './containers/ListOfProducts';
import './App.css';
import SearchBarContainer from './containers/SearchBar';
import { WrapContainer } from './components/Common';

function App() {
  return (
    <WrapContainer>
      <SearchBarContainer />
      <ListOfProductsContainer />
    </WrapContainer>
  );
}

export default App;
