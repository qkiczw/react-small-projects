import React from 'react';
import styles from './BreakfastsView.module.css';
import AppContext from '../../context';

// Components
import List from '../../components/List/List';


const BreakfastsView = () => (
    <AppContext.Consumer>
        
        {(context) => (
            
            <div className={styles.wrapper}>
                <div className={styles.viewHeader}>
                    <h1>Lista śniadań</h1>
                </div>
                <List />
            </div>
        )}
        
    </AppContext.Consumer>
);

export default BreakfastsView;