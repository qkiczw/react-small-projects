import React from 'react';
import styles from './Item.module.css';

const Item =({id, name, itemColor, removeItem, isDone, taskIsDone}) => (
    <>
        <li className={styles.wrapper}>
            <div className={styles[itemColor]}>
                <p className={!isDone ? styles.taskNameUnDone : styles.taskNameDone}>{name}</p>
                <div>
<button type='button' onClick={()=> taskIsDone(id, isDone)} className={styles.btn}>{!isDone ? 'Done' : 'Udone'}</button>
                    <button type='button' onClick={()=> removeItem(id)} className={styles.btn}>X</button>
                </div>
            </div>
        </li>
        
    </>
)

export default Item;