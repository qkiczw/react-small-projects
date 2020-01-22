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
                    <h4>{props.data.difficulty}</h4>
               </div>
           </div>
           <div>
               <p>{props.data.description}</p>
               <p>{props.data.ingredients}</p>
           </div>
        </li>
       
    </>
)

export default ListItem;