import React, { useState } from 'react';
import { TasksCollection } from '../api/TasksCollection';


export const TaskForm = ({user}) =>{

    const [text, setText] = useState("");

    const handelSubmit =e =>{
        e.preventDefault();
        if (!text) return;
        TasksCollection.insert({
            text:text.trim(),
            createdAt: new Date(),
            userId: user._id

        });
        setText("");
    }

    return (
        <form className="task-form" onSubmit={handelSubmit}>
            <input 
            type ="text"
            placeholder = "Type to new tasks" 
            value={text}
            onChange={(e)=>setText(e.target.value)}
            />
            <button type='submit'>추가</button>
        </form>
    );
};