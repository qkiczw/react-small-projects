import React from 'react';
import styles from './HomeView.module.css';
import AppContext from '../../context';


const HomeView = () => (
    <AppContext.Consumer>
        {(context) => (
            <div>
                <h1>This is Start page of the app</h1>
                <h2>{context.test}</h2>
            </div>
        )}
    </AppContext.Consumer>
    
)


export default HomeView;