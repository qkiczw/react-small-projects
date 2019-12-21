import React from 'react'

import Header from './header/Header';
import ItemsList from './ItemsList/ItemsList';
import AddItemPanel from './AddItemPanel/AddItemPanel';

const ToDoList = (props) => (
    
    <>
        <Header/>
        <ItemsList items={props.stateItems}/>
        <AddItemPanel addItem={props.addItem}/>
    </>
)

export default ToDoList;