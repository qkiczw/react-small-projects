import React from 'react';
import styles from './Item.module.css';

//assets
import doneIcon from '../../../../assets/done.png';
import unDoneIcon from '../../../../assets/undone.png';
import deleteIcon from '../../../../assets/delete.png';

const Item =({id, name, itemColor, removeItem, isDone, taskIsDone}) => (
    <>
        <li className={styles.wrapper}>
            <div className={styles[itemColor]}>
                <p className={!isDone ? styles.taskNameUnDone : styles.taskNameDone}>{name}</p>
                <div>
<button type='button' onClick={()=> taskIsDone(id, isDone)} className={styles.btn}>{!isDone ? <img src={doneIcon} className={styles.icon} alt='done Icon'/> : <img src={unDoneIcon} className={styles.icon} alt='undone Icon'/>}</button>
                    <button type='button' onClick={()=> removeItem(id)} className={styles.btn}><img src={deleteIcon} className={styles.icon} alt='delete Icon'/></button>
                </div>
            </div>
        </li>
        
    </>
)

export default Item;