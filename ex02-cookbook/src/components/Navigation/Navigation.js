import React from 'react';
import styles from './Navigation.module.css';
import {NavLink} from 'react-router-dom';

import Logo from '../../assets/logo.png';

const Navigation = () => (
    <>
        <img src={Logo} alt="Logo" className={styles.logo}/>
        <h3>CookBook Menu</h3>
        <ul>
			<li><NavLink exact activeClassName={styles.navItemActive} to="/">Home</NavLink></li>
			<li><NavLink activeClassName={styles.navItemActive} to="/breakfasts">Breakfasts</NavLink></li>
			<li><NavLink activeClassName={styles.navItemActive} to="/dinners">Dinners</NavLink></li>
			<li><NavLink activeClassName={styles.navItemActive} to="/suppers">Suppers</NavLink></li>  	   
        </ul>
    </>
);

export default Navigation;