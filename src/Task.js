import React, {useState} from 'react';
import {Alert, Button, Card, CardBody, Col} from 'reactstrap';

function Task(props) {
    const {task, changeTaskStatus, deleteTask, editTodo} = props;

    const [editTask, setEditTask] = useState(task.name);
    const [isEditMode, setIsEditMode] = useState(false);

    const alertColors = ['success', 'warning', 'danger'];

    const onDelete = () => {
        deleteTask(task.id);
    };

    const editButtonHandler = () => {
        editTodo(task.id, editTask);
        setIsEditMode(false);
    };

    return (
        <div>
            <Col>
                <div>
                    <Card>
                        <CardBody>
                            {task.name}
                            {isEditMode ? (
                                <>
                                    <input type="text" value={editTask} onChange={e => setEditTask(e.target.value)}/>
                                    <button onClick={editButtonHandler}>Save</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => setIsEditMode(true)}>Edit</button>
                                </>
                            )}


                            <Alert color={alertColors[task.priority]}>
                                {task.priority}
                                {task.priority !== 2 &&
                                <Button size="sm" onClick={() => changeTaskStatus(task.id, 'up')}>↑</Button>
                                }
                                {' '}
                                {task.priority !== 0 &&
                                <Button size="sm" onClick={() => changeTaskStatus(task.id, 'down')}>↓</Button>}
                            </Alert>

                            <Button size="sm" onClick={onDelete}>Delete</Button>

                        </CardBody>
                        <CardBody>
                            {task.status !== 'TO DO' &&
                            <Button onClick={() => changeTaskStatus(task.id, 'left')}>←</Button>}
                            {task.status !== 'DONE' &&
                            <Button onClick={() => changeTaskStatus(task.id, 'right')}>→</Button>}
                        </CardBody>
                    </Card>
                </div>
            </Col>
        </div>
    );
}

export default Task;
