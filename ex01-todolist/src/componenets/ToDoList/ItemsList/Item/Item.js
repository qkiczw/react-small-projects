import React from 'react';
import styles from './Item.module.css';

const Item =({name, itemColor}) => (
    <>
        <li className={styles.wrapper}>
            <div className={styles[itemColor]}>
                {name}
            </div>
        </li>
        
    </>
)

export default Item;