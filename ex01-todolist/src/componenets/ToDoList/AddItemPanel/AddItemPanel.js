import React from 'react';
import styles from './AddItemPanel.module.css';
import addTaskIcon from '../../../assets/delete.png';

const AddItemPanel = (props)=> (
    <form onSubmit={props.addItem} className={styles.wrapper}>
        <input id='taskName' name='taskName' placeholder='Enter new Task' className={styles.inputField}/>
        <select id='priority' name='taskPriority' className={styles.inputField}>
            <option value='important'>Important</option>
            <option value='normal'>Normal</option>
            <option value='lowPriority'>Low Priority</option>
        </select>
        <button type='submit' className={styles.btn}><img src={addTaskIcon} className={styles.icon} alt='Add Task Icon'/></button>
    </form>
)

export default AddItemPanel;