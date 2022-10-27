import React, { useState } from 'react';
import {Meteor} from 'meteor/meteor';
import { TasksCollection } from '../db/TasksCollection';


export const TaskForm = ({user}) =>{

    const [text, setText] = useState("");

    const handelSubmit =e =>{
        e.preventDefault();
        if (!text) return;
        Meteor.call('tasks.insert', text);
        setText('');
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