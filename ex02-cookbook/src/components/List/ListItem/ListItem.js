import React from 'react';
import styles from './ListItem.module.css';

import ClockIcon from '../../../assets/clock-icon.png'


const ListItem = (props) => (
    
    <>
        <li className={styles.wrapper}>
            <div className={styles.itemImage}>
                <img src={props.data.image} alt="Recipe pic" className={styles.image}/>
            </div>
            <div className={styles.itemContent}>
                <div className={styles.title}>
                    <h2>{props.data.title}</h2>
                </div>
                <div className={styles.categoryAndLevel}>
                    <div className={styles.category}>{props.data.category}</div>
                    <div>Trudność: ***</div>
                </div>
                <div className={styles.time}>
                    <img src={ClockIcon} className={styles.clockIcon} alt='clock icon'/>
                    <p>Czas: {props.data.time} min.</p>
                </div>
                <div className={styles.ingredients}>
                    <p className={styles.ingredientsTitle}>Składniki:</p>
                    <p>{props.data.ingredients.join(', ')}</p>
                </div>
            </div>
            <div className={styles.itemBtns}> 
                <button className={styles.moreBtn}>Więcej...</button>
                <button className={styles.addBtn}>Dodaj do ulubionych + </button>
            </div>
        </li>
    </>
)

export default ListItem;