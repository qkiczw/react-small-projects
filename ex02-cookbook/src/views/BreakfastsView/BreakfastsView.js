import React from 'react';
import styles from './BreakfastsView.module.css';
import AppContext from '../../context';

// Components
import List from '../../components/List/List';
import SearchBar from '../../components/SearchBar/SearchBar';

const BreakfastsView = () => (
    <AppContext.Consumer>      
        {(context) => (
            <div className={styles.wrapper}>
                <div className={styles.viewHeader}>
                    <h1>Przepisy na śniadania</h1>
                </div>
                <div>
                    <SearchBar/>
                </div>
                <List data={context.recepies.breakfasts}/>
            </div>
        )}
        
    </AppContext.Consumer>
);

export default BreakfastsView;