import React from 'react';
import styles from './DinnersView.module.css';
import AppContext from '../../context';

import List from '../../components/List/List';
import SearchBar from '../../components/SearchBar/SearchBar';

const DinnersView = ({...props}) => (
    <AppContext.Consumer>      
        {(context) => (
            <> 
                <div className={styles.wrapper}>
                    <div className={styles.viewHeader}>
                        <h1>Przepisy na obiady</h1>
                    </div>
                    <div>
                        <SearchBar handleSearch={props.handleSearch} searchIn={'dinners'}/>
                    </div>
                    <List data={context.recepies.dinners}/>
                </div>
            </>
        )}
        
    </AppContext.Consumer>
);

export default DinnersView;