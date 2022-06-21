import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Task from './components/tasks';
import './App.css';

const axios = require('axios').default;

function App() {
  const [tasksToDo, setTaskToDo] = useState([]);
  const [tasksInProgress, setTaskInProgress] = useState([]);
  const [tasksDone, setTaskDone] = useState([]);
  const [tasksTesting, setTaskTesting] = useState([]);

  useEffect(() => {
    axios.get('https://ej2services.syncfusion.com/production/web-services/api/Kanban')
      .then(function (response) {
        // handle success
        setTaskToDo(response.data.filter(t => t.Status === 'Open'));
        setTaskInProgress(response.data.filter(t => t.Status === 'InProgress'));
        setTaskDone(response.data.filter(t => t.Status === 'Close'));
        setTaskTesting(response.data.filter(t => t.Status === 'Validate'));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <div className='task_list'>
        <div className='task_list_todo'>
          <h3>Open: {tasksToDo.length}</h3>
          <Task
            tasks={tasksToDo}
          />
        </div>
        <div className='task_list_in_progress'>
          <h3>To Do: {tasksInProgress.length}</h3>
          <Task
            tasks={tasksInProgress}
          />
        </div>
        <div className='task_list_testing'>
          <h3>Testing: {tasksTesting.length}</h3>
          <Task
            tasks={tasksTesting}
          />
        </div>
        <div className='task_list_done'>
          <h3>Done: {tasksDone.length}</h3>
          <Task
            tasks={tasksDone}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
