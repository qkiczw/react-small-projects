import React from 'react';
import styles from './Item.module.css';

const Item =({id, name, itemColor, removeItem}) => (
    <>
        <li className={styles.wrapper}>
            <div className={styles[itemColor]}>
                <p>{name}</p>
                <button type='button' onClick={()=> removeItem(id)} className={styles.btn}>X</button>
            </div>
        </li>
        
    </>
)

export default Item;