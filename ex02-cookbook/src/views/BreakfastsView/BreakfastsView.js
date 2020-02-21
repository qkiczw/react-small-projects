import React from 'react';
import styles from './BreakfastsView.module.css';
import AppContext from '../../context';

// Components
import List from '../../components/List/List';
import SearchBar from '../../components/SearchBar/SearchBar';

const BreakfastsView = ({...props}) => (
    <AppContext.Consumer>  
        {(context) => (
            <div className={styles.wrapper}>
                {console.log('coś tu się dodało: ',context.searching[0])}
                
                <div className={styles.viewHeader}>
                    <h1>Przepisy na śniadania</h1>
                </div>
                <div>
                    <SearchBar handleSearch={props.handleSearch} searchIn={'breakfasts'}/>
                </div>
                <List data={context.recepies.breakfasts}/>
            </div>
        )}
        
    </AppContext.Consumer>
);

export default BreakfastsView;