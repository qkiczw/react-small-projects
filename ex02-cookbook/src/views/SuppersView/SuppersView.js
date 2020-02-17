import React from 'react';
import styles from './SuppersView.module.css';
import AppContext from '../../context';

import List from '../../components/List/List';
import SearchBar from '../../components/SearchBar/SearchBar';


const SuppersView = ({...props}) => (
    <AppContext.Consumer>      
        {(context) => (
            <> 
                <div className={styles.wrapper}>
                    <div className={styles.viewHeader}>
                        <h1>Przepisy na kolacje</h1>
                    </div>
                    <div>
                        <SearchBar handleSearch={props.handleSearch} searchIn={'suppers'}/>
                    </div>
                    <List data={context.recepies.suppers}/>
                </div>
            </>
        )}
        
    </AppContext.Consumer>
);

export default SuppersView;