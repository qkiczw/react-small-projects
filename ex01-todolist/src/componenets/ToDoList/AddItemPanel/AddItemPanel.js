import React from 'react';

const AddItemPanel = (props)=> (
    <>
        <p>This pannel will add taks to the state!</p>
        <form onSubmit={props.addItem}>
            <input name='taskName' placeholder='Enter new Task'></input>
            <select name='taskPriority'>
                <option value='important'>Important</option>
                <option value='normal'>Normal</option>
                <option value='lowPriority'>Low Priority</option>
            </select>
            <button type='submit'>+ Add</button>
        </form>
    </>
)

export default AddItemPanel;