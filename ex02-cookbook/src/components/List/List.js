import React from 'react';
import AppContext from '../../context';
import styles from './List.module.css';

//components
import ListItem from './ListItem/ListItem';

const List = () => (
    <AppContext.Consumer>
        {(context) => (
            <div>
                <ul className={styles.wrapper}>
                    {context.recepies.breakfast.map( item => (
                        <ListItem data={item} />
                    ))}                    
                </ul>
            </div>
        )}
    
    </AppContext.Consumer>
)

export default List;