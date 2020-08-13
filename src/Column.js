import React from 'react';
import {Col} from 'reactstrap';
import Task from "./Task";

function Column(props) {

  const {tasks, column, changeTaskStatus, deleteTask} = props;

  return (
      <div>
        <Col>
          <h5>{column.title}</h5>
          {tasks.filter(el => el.status === column.status)
              .sort((a, b) => b.priority - a.priority)
              .map(el => <Task key={el.id}
                               task={el}
                               changeTaskStatus={changeTaskStatus}
                               deleteTask={deleteTask}/>)}

        </Col>

      </div>
  );
}

export default Column;
