import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import { Task } from './Task.jsx';

const tasks =[
  {_id: 1, text : 'Fist Task'},
  {_id: 2, text :'Second Task'},
  {_id: 3, text : "Third Task"}
];

export const App = () => (
  <div>
    <Task />
  </div>
);
