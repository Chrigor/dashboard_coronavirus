import React from 'react';
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from './styles/GlobalStyle';
import Layout from './components/Layout';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  return (
    <Provider store={store.store}>
      <BrowserRouter>
        <GlobalStyle />
        <Layout />
      </BrowserRouter>
    </Provider>
  )
}

export default App;
