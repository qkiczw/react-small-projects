import React from 'react';
import styles from './Navigation.module.css';
import {NavLink} from 'react-router-dom';

import Logo from '../../assets/logo.png';

const Navigation = () => (
    <>
        <aside className={styles.wrapper}>
            <img src={Logo} alt="Logo" className={styles.logo}/>
            <h3>Przepisy</h3>
            <ul>
                <li><NavLink exact activeClassName={styles.navItemActive} to="/">Start</NavLink></li>
                <li><NavLink activeClassName={styles.navItemActive} to="/breakfasts">Śniadania</NavLink></li>
                <li><NavLink activeClassName={styles.navItemActive} to="/dinners">Obiady</NavLink></li>
                <li><NavLink activeClassName={styles.navItemActive} to="/suppers">Kolacje</NavLink></li>  	   
                <li><NavLink activeClassName={styles.navItemActive} to="/suppers">Ulubione</NavLink></li>  	   
            </ul>
        </aside>
    </>
);

export default Navigation;