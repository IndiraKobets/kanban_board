import React from 'react';
import {Alert, Button, Card, CardBody, Col} from 'reactstrap';

function Task(props) {

    const {task, changeTaskStatus, deleteTask} = props;

    const alertColors = ['success', 'warning', 'danger'];

    const onDelete = () => {
        deleteTask(task.id);
    };
    return (
        <div>
            <Col>
                <div>
                    <Card>
                        <CardBody>
                            {task.name}

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
