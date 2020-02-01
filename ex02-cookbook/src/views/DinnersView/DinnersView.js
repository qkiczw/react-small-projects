import React from 'react';
import styles from './DinnersView.module.css';
import AppContext from '../../context';

import List from '../../components/List/List';

const DinnersView = () => (
    <AppContext.Consumer>      
        {(context) => (
            <> 
                <div className={styles.wrapper}>
                    <div className={styles.viewHeader}>
                        <h1>Przepisy na obiady</h1>
                    </div>
                    <List data={context.recepies.dinners}/>
                </div>
            </>
        )}
        
    </AppContext.Consumer>
);

export default DinnersView;