import React from 'react';
import styles from './HomeView.module.css';
import AppContext from '../../context';

import CookBookLogo from '../../assets/cookBook-logo.png';


const HomeView = () => (
    <AppContext.Consumer>
        {(context) => (
            <>
                <div className={styles.wrapper}>
                    <div className={styles.logo}>
                        <div className={styles.logoInnerCirle}>
                            <img src={CookBookLogo} className={styles.cookBookLogo} alt='logo'/>
                            <h1 className={styles.logoLineOne}>przepiśnik</h1>
                            <p className={styles.logoLineTwo}>100 przepisów</p>
                        </div>
                    </div>
                    <div className={styles.latesAdded}>
                        <div className={styles.latestAddedTitle}>
                            <h3>Ostatnio dodane:</h3>
                        </div>
                    </div>
                    <div className={styles.latestAddedRecipes}>
                        <div className={styles.latestAddedRecipe}></div>
                        <div className={styles.latestAddedRecipe}></div>
                        <div className={styles.latestAddedRecipe}></div>
                    </div>
                </div>    
            </>
        )}
    </AppContext.Consumer>
    
)


export default HomeView;