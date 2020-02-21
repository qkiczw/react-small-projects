import React from 'react';
import styles from './List.module.css';

import ListItem from './ListItem/ListItem';

const List = (props) => (
    
    <>
        <ul className={styles.wrapper}>
            {props.data.map( item => (
            <ListItem key={item.id} itemData={item}/>
            ))}
        </ul>  
    </>
)

export default List;