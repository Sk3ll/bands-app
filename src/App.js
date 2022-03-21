import React from 'react';
import ListOfProductsContainer from './containers/ListOfProducts';
import './App.css';
import SearchBar from './components/SearchBar';
import { WrapContainer } from './components/Common';

function App() {
  return (
    <WrapContainer>
      <SearchBar />
      <ListOfProductsContainer />
    </WrapContainer>
  );
}

export default App;
