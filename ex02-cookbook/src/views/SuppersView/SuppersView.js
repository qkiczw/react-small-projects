import React from 'react';
import styles from './SuppersView.module.css';
import AppContext from '../../context';

import List from '../../components/List/List';


const SuppersView = () => (
    <AppContext.Consumer>      
        {(context) => (
            <> 
                <div className={styles.wrapper}>
                    <div className={styles.viewHeader}>
                        <h1>Lista śniadań</h1>
                    </div>
                    <List data={context.recepies.suppers}/>
                </div>
            </>
        )}
        
    </AppContext.Consumer>
);

export default SuppersView;