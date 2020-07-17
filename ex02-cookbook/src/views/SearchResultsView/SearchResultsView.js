import React from 'react';
import Styles from '../SearchResultsView/SearchResultsView.module.css';
import AppContext from '../../context';
import List from '../../components/List/List'

const SearchResultsView = () => (
    <AppContext.Consumer>
        {(context) => (
            <>
            <h1>This view will be display search results !!!</h1>
            <List data={context.searching} />
            {console.log('coś tu ma być', context.searching)}
            </> 

        )}
    </AppContext.Consumer>
)


export default SearchResultsView;