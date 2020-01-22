import React from 'react';
import styles from './BreakfastsView.module.css';
import AppContext from '../../context';

// Components
import List from '../../components/List/List';


const BreakfastsView = () => (
    <AppContext.Consumer>
        
        {(context) => (
            
            <div>
                <h1>This is Breakfasts View</h1>
                <List />
                
            </div>
        )}
        
    </AppContext.Consumer>
);

export default BreakfastsView;