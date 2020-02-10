import React from 'react';
import styles from './SearchBar.module.css';
import AppContext from '../../context';

const SearchBar = ({searchFn}) => (
    <AppContext.Consumer>
        {(context) => (
            <>
                <div className={styles.wrapper}>
                    <form onSubmit={searchFn}>
                        <input id='recipekName' name='recipeName' placeholder='Wpisz szukane danie' className={styles.inputField} required/>
                        <button type={onsubmit}>Szukaj</button>
                    </form>
                </div>
            </>
        )}
    </AppContext.Consumer>
);

export default SearchBar;
