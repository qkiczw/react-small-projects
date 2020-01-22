import React from 'react';
import styles from './ListItem.module.css';


const ListItem = (props) => (
    <>
        {console.log('to props', props)}
        <li key={props.data.id} className={styles.wrapper}>
           <div>
                <div>
                   <img src={props.data.image} alt="Image" className={styles.image}/>
               </div>
               <div>
                    <h3>{props.data.title}</h3>
                    <div>
                        <span className={styles.difficultyTitle}>Trudność:</span>
                        <span>{props.data.difficulty}</span>
                    </div>
               </div>
           </div>
           <div>
               <div className={styles.description}>
                   <p  className={styles.descriptionTitle}>Opis:</p>
                   <p>{props.data.description}</p>
               </div>
               <div className={styles.ingredients}>
                   <p className={styles.ingredientsTitle}>Składniki:</p>
                   <p>{props.data.ingredients}</p>
               
               </div>
           </div>
        </li>
       
    </>
)

export default ListItem;