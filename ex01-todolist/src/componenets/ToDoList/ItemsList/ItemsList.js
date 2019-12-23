import React from 'react';
import styles from './Items.module.css';
import Item from './Item/Item';

const Items= (props) => (
    <>
        <ul className={styles.wrapper}>
            {props.items.map( (item) => (
                <Item
                    key={item.id}
                    removeItem={props.removeItem}
                    taskIsDone={props.taskIsDone}
                    {...item}
                />
            ))}
        </ul>
    </>
)

export default Items;