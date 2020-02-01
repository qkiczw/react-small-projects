import React from 'react';
import styles from './List.module.css';

import ListItem from './ListItem/ListItem';

const List = (props) => (
    <>
        <u>
            {props.data.map( item => (
            <ListItem key={item.id} itemData={item}/>
            ))}
        </u>  
    </>
)

export default List;