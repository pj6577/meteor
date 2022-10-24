import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { TasksCollection } from '/imports/api/TasksCollection';
import { Task } from './Task';
import { TaskForm } from './TaskForm';


// 토글 박스
const toggleChecked = ({ _id, isChecked }) => {
  TasksCollection.update(_id, {
    $set: {
      isChecked: !isChecked
    }
  })
};

// 삭제
const deleteTask = ({ _id }) => TasksCollection.remove(_id);

export const App = () => {
  const tasks = useTracker(() => TasksCollection.find({}, { sort: { createdAt: -1 } }).fetch());
  return (
    <div className="app">
      <header>
    <div className="app-bar">
      <div className="app-header">
      <h1>📝️ meteor To Do 리스트</h1>
      </div>
      </div>
      </header>
      <div className="main">
      <TaskForm/>

      <ul className='tasks'>
        { tasks.map(task => <Task key={ task._id } 
        task={ task } 
        onCheckboxClick={toggleChecked} 
        onDeleteClick={deleteTask}
        />) }
      </ul>
    </div>
    </div>
  );
};