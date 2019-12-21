import React from 'react';
import styles from './Item.module.css';

const Item =({name, itemColor}) => (
    <>
        <li className={styles[itemColor]}>{name}</li>
        
    </>
)

export default Item;