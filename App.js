
import * as React from 'react';
import Route from './route'
import { Provider } from 'react-redux';
import configureStore from './scr/redux/store/configureStore';

// use applyMiddleware to add the thunk middleware to the store
const store = configureStore();

// console.warn('test warn');

function App() {
  return (
    <Provider store={store}>
      <Route></Route>
    </Provider>
  );
}

export default App;
