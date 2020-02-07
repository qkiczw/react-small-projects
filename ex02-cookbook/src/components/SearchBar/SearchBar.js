import React from 'react';
import styles from './SearchBar.module.css';
import AppContext from '../../context';

const SearchBar = () => (
    <AppContext.Consumer>
        {(context) => (
            <>
                <div className={styles.wrapper}>
                    <form>
                        <input placeholder='Wpisz coś aby zacząć szukać'></input>
                        <button className={styles.searchBtn}>Szukaj</button>
                    </form>
                </div>
            </>
        )}
    </AppContext.Consumer>
);

export default SearchBar;
