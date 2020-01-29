import React from 'react';
import styles from './Root.module.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppContext from '../../context';

import HomeView from '../HomeView/HomeView';
import BreakfastsView from '../BreakfastsView/BreakfastsView';
import DinnersView from '../DinnersView/DinnersView';
import SuppersView from '../SuppersView/SuppersView';
import Navigation from '../../components/Navigation/Navigation';

//data
import data from '../../data/Data';


class Root extends React.Component {

  state = {
    test: 'Context Api works! :)',
    recepies: data,
  }


  
  render(){

    return(
      <BrowserRouter>
        <AppContext.Provider value={this.state}>
          <div className={styles.wrapper}>
            <div className={styles.cookBook}>
              <div className={styles.navPanel}>
                <Navigation/>
              </div>
              <div className={styles.recepiesPanel}>
                <Switch>
                  <Route exact path='/' component={HomeView} />
                  <Route path='/breakfasts' component={BreakfastsView} />
                  <Route path='/dinners' component={DinnersView} />
                  <Route path='/suppers' component={SuppersView} />
                </Switch>
              </div>
            </div> 
          </div>
        </AppContext.Provider>
      </BrowserRouter>
    )

  }
}

export default Root;
