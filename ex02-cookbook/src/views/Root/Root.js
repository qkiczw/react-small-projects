import React from 'react';
import styles from './Root.module.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomeView from '../HomeView/HomeView';
import BreakfastsView from '../BreakfastsView/BreakfastsView';
import DinnersView from '../DinnersView/DinnersView';
import SuppersView from '../SuppersView/SuppersView';
import Navigation from '../../components/Navigation/Navigation';


class Root extends React.Component {

  state = {
    test: 'it works! :)'
  }


  
  render(){

    return(
      <BrowserRouter>
        <>
          <h1>There will be a CookBook</h1>
          <Navigation/>
          <Switch>
            <Route exact path='/' component={HomeView} />
            <Route path='/breakfasts' component={BreakfastsView} />
            <Route path='/dinners' component={DinnersView} />
            <Route path='/suppers' component={SuppersView} />
          </Switch>
        </>
      </BrowserRouter>
    )

  }
}

export default Root;
