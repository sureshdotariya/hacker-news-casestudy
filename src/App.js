import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import Header from './components/header/header';
import store from './redux/store';
import { Provider } from 'react-redux';

import './App.scss';
import ChartPage from './pages/charts/chartpage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/home' component={HomePage}></Route>
          <Route path='/chart' component={ChartPage}></Route>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
