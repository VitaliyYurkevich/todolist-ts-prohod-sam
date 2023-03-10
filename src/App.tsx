import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

function App() {

    let tasks1 = [
        { id: 1, title: 'CSS', isDone: true},
        { id: 2, title: 'JS', isDone: true},
        { id: 3, title: 'React', isDone: false},
        { id: 4, title: 'React', isDone: false}
]
        let tasks2 = [
            { id: 1, title: 'Hello World', isDone: true},
            { id: 1, title: 'I am Happy', isDone: true},
            { id: 1, title: 'Yo', isDone: true},

    ]
    return (
        <div className="App">

            <Todolist title={'What to learn?'} tasks={tasks1}/>
            <Todolist title={'Movies'} tasks={tasks2}/>



        </div>
    );
}


export default App;
