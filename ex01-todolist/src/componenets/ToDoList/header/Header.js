import React from 'react';
import styles from './Header.module.css';

const Header = () => (
    <>
        <div className={styles.wrapper}>
            <h1 className={styles.title}>To Do List</h1>
        </div>
    </>
)

export default Header;