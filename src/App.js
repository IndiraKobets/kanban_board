import React, {useState} from 'react';
import './App.css';
import AddTaskModal from "./AddTaskModal";
import Column from "./Column";
import {v4 as uuidv4} from 'uuid';
import {Container, Row} from 'reactstrap';
import AddColumnModal from "./AddColumnModal";

function App() {

    const initialTasks = [
        {id: uuidv4(), name: 'Do homework', status: 'TO DO', priority: 1},
        {id: uuidv4(), name: 'Do laundry', status: 'IN PROGRESS', priority: 3},
        {id: uuidv4(), name: 'Make an appointment', status: 'REVIEW', priority: 1},
        {id: uuidv4(), name: 'Call Mom', status: 'DONE', priority: 2},
        {id: uuidv4(), name: 'Cleaning', status: 'TO DO', priority: 3},
        {id: uuidv4(), name: 'Learn React', status: 'IN PROGRESS', priority: 1},
        {id: uuidv4(), name: 'Go shopping', status: 'REVIEW', priority: 2},
        {id: uuidv4(), name: 'Watch lecture', status: 'DONE', priority: 1},
    ];

    const [tasks, setTasks] = useState(initialTasks);

    const columnList = [
        {id: uuidv4(), title: 'TO DO', status: 'TO DO'},
        {id: uuidv4(), title: 'IN PROGRESS', status: 'IN PROGRESS'},
        {id: uuidv4(), title: 'REVIEW', status: 'REVIEW'},
        {id: uuidv4(), title: 'DONE', status: 'DONE'},

    ];

    const [columns, setColumns] = useState(columnList);

    const statuses = ['TO DO', 'IN PROGRESS', 'REVIEW', 'DONE'];

    const priorities = [0, 1, 2];



    const changeTaskStatus = (taskId, direction) => {
        const newTasks = tasks.map(el => {
            if (el.id === taskId) {
                if (direction === 'right') el.status = statuses[statuses.indexOf(el.status) + 1];
                if (direction === 'left') el.status = statuses[statuses.indexOf(el.status) - 1];
                if (direction === 'up') el.priority = priorities[priorities.indexOf(el.priority) + 1];
                if (direction === 'down') el.priority = priorities[priorities.indexOf(el.priority) - 1];
            }
            return el;
        })
        setTasks(newTasks);
    };

    const addNewTask = (newName, newPriority, newStatus) => {
        const newTask = {id: uuidv4(), name: newName, status: newStatus, priority: newPriority};
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (taskId) => {
        const newTask = tasks.filter(el => el.id !== taskId);
        setTasks(newTask);
    };



    const addNewColumn = (newTitle, newStatus) => {
        const newColumn = {id: uuidv4(), title: newTitle, status: 'TO DO' };
        setColumns([...columns, newColumn]);
    };

    return (
        <div className="App">

            <Container>

                <AddTaskModal addNewTask={addNewTask}/>
                <AddColumnModal addNewColumn={addNewColumn}/>
                <Row>
                    {columns.map(el => <Column key={el.id}
                                               tasks={tasks}
                                               column={el}
                                               changeTaskStatus={changeTaskStatus}
                                               deleteTask={deleteTask}/>)}
                    {/*<Column tasks={tasks} title={'TO DO'} changeTaskStatus={changeTaskStatus}/>*/}
                    {/*<Column tasks={tasks} title={'IN PROGRESS'} changeTaskStatus={changeTaskStatus}/>*/}
                    {/*<Column tasks={tasks} title={'REVIEW'} changeTaskStatus={changeTaskStatus}/>*/}
                    {/*<Column tasks={tasks} title={'DONE'} changeTaskStatus={changeTaskStatus}/>*/}
                </Row>


            </Container>


        </div>
    );
}

export default App;
