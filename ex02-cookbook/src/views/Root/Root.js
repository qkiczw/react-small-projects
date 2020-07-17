import React from 'react';
import styles from './Root.module.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppContext from '../../context';

import HomeView from '../HomeView/HomeView';
import BreakfastsView from '../BreakfastsView/BreakfastsView';
import DinnersView from '../DinnersView/DinnersView';
import SuppersView from '../SuppersView/SuppersView';
import Navigation from '../../components/Navigation/Navigation';
import SearcheResultsView from '../SearchResultsView/SearchResultsView';

//data
import data from '../../data/Data';


class Root extends React.Component {

  state = {
    searching: [],
    recepies: data,
  }

  handleSearch = (e, searchIn) => {
    e.preventDefault();
    
    let searchedItem = e.target.recipeName.value.toLowerCase();
    let searchedCat = searchIn;

    this.setState(prevState => ({
      
      searching: [...prevState.recepies[searchedCat].filter( item => item.title.includes(searchedItem))]
      
    }))
  }

  
  render(){

    return(
      <BrowserRouter>
        <AppContext.Provider value={this.state}>
          <div className={styles.wrapper}>
            <div className={styles.navPanel}>
                <Navigation/>
            </div>
            <div className={styles.recepiesPanel}>
              <Switch>
                <Route exact path='/' component={HomeView} />
                <Route path='/breakfasts' render={ () => <BreakfastsView handleSearch={this.handleSearch} viewsearch={this.viewSearchedHandler}/>}/>
                <Route path='/dinners' render={() => <DinnersView handleSearch={this.handleSearch} viewsearch={this.viewSearchedHandler}/>} />
                <Route path='/suppers' render={() => <SuppersView handleSearch={this.handleSearch}/>} />
                <Route path='/searched' render={() => <SearcheResultsView/>} />
              </Switch>
            </div>  
          </div>
        </AppContext.Provider>
      </BrowserRouter>
    )

  }
}

export default Root;
