import React from 'react';
import { WrapContainer } from './components/Common';
import useBandReducer, { GlobalDispatch, GlobalState } from './redux/reducers/bandReducer';
import ListOfProductsContainer from './containers/ListOfProducts';
import SearchBarContainer from './containers/SearchBar';

function App() {
  const [state, dispatch] = useBandReducer();
  return (
    <GlobalDispatch.Provider value={dispatch}>
      <GlobalState.Provider value={state}>
        <WrapContainer>
          <SearchBarContainer />
          <ListOfProductsContainer />
        </WrapContainer>
      </GlobalState.Provider>
    </GlobalDispatch.Provider>
  );
}

export default App;
