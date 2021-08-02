import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducers from "./reducers/rootReducers";
import thunk from "redux-thunk";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

import createSagaMiddleware from 'redux-saga';
import  rootSaga from "./saga/rootsaga";

// import { ConnectedRouter } from 'react-router-redux'

// import createHistory from "history/createBrowserHistory"


const persistConfig = {
  key: "root",
  storage,
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducers);

const middlewares = [thunk, sagaMiddleware];

let store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

let persistor = persistStore(store);

// export const history = createHistory()

// history.listen((location, action) => {
//     window.scrollTo(0, 0)
// })


ReactDOM.render(
  // <React.Fragment>

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>

      <BrowserRouter>

        <App />
   
      </BrowserRouter>
    </PersistGate>
  </Provider>,

  // </React.Fragment>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
