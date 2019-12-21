import React from 'react';
import styles from './Items.module.css';
import Item from './Item/Item';

const Items= (props) => (
    <>
        <ul className={styles.items}>
            {props.items.map( item => (
                <Item
                    key={item.id}
                    {...item}
                />
            ))}
        </ul>
    </>
)

export default Items;