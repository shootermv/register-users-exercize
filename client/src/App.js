import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import usersSaga from './store/sagas'
import rootReducer from "./store";
// create the saga middleware
import createSagaMiddleware from 'redux-saga'

import Navbar from "./shared/Navbar";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import UsersPage from "./Pages/UsersPage/UsersPage";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(usersSaga)

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <RegisterPage />} />
            <Route exact path="/users" component={UsersPage} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}
