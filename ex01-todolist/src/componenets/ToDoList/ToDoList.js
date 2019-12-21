import React from 'react'

import Header from './header/Header';
import ItemsList from './ItemsList/ItemsList';

const ToDoList = (props) => (
    
    <>
        <Header/>
        <ItemsList items={props.stateItems}/>
    </>
)

export default ToDoList;