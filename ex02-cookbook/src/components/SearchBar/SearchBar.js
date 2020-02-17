import React from 'react';
import styles from './SearchBar.module.css';
import AppContext from '../../context';

const SearchBar = ({handleSearch, searchIn}) => (
    <AppContext.Consumer>
        {(context) => (
            <>
                <div className={styles.wrapper}>
                    <form onSubmit={e => handleSearch(e, searchIn)}>
                        <input id='recipekName' name='recipeName' placeholder='Wpisz szukane danie' className={styles.inputField} required/>
                        <button type='onSubmit' >Szukaj</button>
                    </form>
                </div>
            </>
        )}
    </AppContext.Consumer>
);

export default SearchBar;
