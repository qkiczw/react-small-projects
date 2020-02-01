import React from 'react';
import styles from './ListItem.module.css';

import ClockIcon from '../../../assets/clock-icon.png'
import StarIcon from '../../../assets/star-icon.png'

// const levelIcon = <img src={StarIcon} className={styles.starIcon} alt='clock icon'/>;

const checkLevel = (level) => {
    if (level === 2) {
        return 'trohę trudne';
        // zrobić div z klasą icons albo coś takiego i do niego dawać append jakiś kod z img
    }
    else if (level === 3) {
        return 'trudne';
    }
    else {
        return 'łatwe';
    }

}; 

const ListItem = (props) => (
    
    <>
        <li className={styles.wrapper}>
            <div className={styles.itemImage}>
                <img src={props.itemData.image} alt="Recipe pic" className={styles.image}/>
            </div>
            <div className={styles.itemContent}>
                <div className={styles.title}>
                    <h2>{props.itemData.title}</h2>
                </div>
                <div className={styles.categoryAndLevel}>
                    <div className={styles.category}>{props.itemData.category}</div>
                    <div className={styles.icons}>
                        Trudność: {checkLevel(props.itemData.difficulty)}
                    </div>
                </div>
                <div className={styles.time}>
                    <img src={ClockIcon} className={styles.clockIcon} alt='clock icon'/>
                    <p>Czas: {props.itemData.time} min.</p>
                </div>
                <div className={styles.ingredients}>
                    <p className={styles.ingredientsTitle}>Składniki:</p>
                    <p>{props.itemData.ingredients.join(', ')}</p>
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