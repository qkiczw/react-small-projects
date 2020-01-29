import React from 'react';
import styles from './ListItem.module.css';


const ListItem = (props) => (
    
    <>
        <div className={styles.wrapper}>
            <div>
                <img src={props.data.image} alt="Recipe pic" className={styles.image}/>
            </div>
            <div className={styles.title}>
                <h2>{props.data.title}</h2>
            </div>
            <div className={styles.categoryAndLeve}>
                <div>{props.data.category}</div>
                <div>Trudność: </div>
            </div>
            <div className={styles.ingredients}>
                <p className={styles.ingredientsTitle}>Składniki:</p>
                <p>{props.data.ingredients}</p>
            </div>
            <div className={styles.addAndMoreBtns}>
                <button>Więcej...</button>
                <button>Dodaj do ulubionych </button>
            </div>
        </div>
    </>
)

export default ListItem;