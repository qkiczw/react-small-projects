import React from 'react';
import Styles from '../SearchResultsView/SearchResultsView.module.css';
import AppContext from '../../context';

const SearchResultsView = () => (
    <AppContext.Consumer>
        {(context) => (
            <h1>This view will be display search results !!!</h1>
        )}
    </AppContext.Consumer>
)


export default SearchResultsView;