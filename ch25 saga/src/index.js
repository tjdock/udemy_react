import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import burgerBuilderReducer from './store/reducers/burgerBuilder';
import orderReducer from './store/reducers/order';
import authReucer from './store/reducers/auth';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { watchAuth } from './store/sagas/index';

const composeEnhacers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  burgerBuilder: burgerBuilderReducer,
  order: orderReducer,
  auth: authReucer
})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhacers(
  applyMiddleware(thunk, sagaMiddleware)
));

sagaMiddleware.run(watchAuth);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();