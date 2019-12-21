import React from 'react';

const AddItemPanel = (props)=> (
    <>
        <p>This pannel will add taks to the state!</p>
        <form>
            <input name='taskName' placeholder='Enter new Task'></input>
            <select name='task-priority'>
                <option value='important'>Important</option>
                <option value='normal'>Normal</option>
                <option value='lowPriority'>Low Priority</option>
            </select>
            <button>+ Add task</button>
        </form>
    </>
)

export default AddItemPanel;