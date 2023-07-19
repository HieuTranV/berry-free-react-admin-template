// import { useEffect, useState } from 'react';

// material-ui
import MainCard from 'ui-component/cards/MainCard';
import AddStep from './AddStep';
import { useState } from 'react';
import { Stack } from '@mui/material';
import StepColumn from './StepColumn';
import './index.css';
import CreateTask from './CreateTask';
// project imports

// ==============================|| DEFAULT DASHBOARD ||============================== //


const Kanbanboard = () => {
  const [steps, setStep] = useState([])
  const [tasks, setTasks] = useState([])

  const AddNewStep = (step) => {
    setStep(oldArray => [...oldArray, step])
    console.log(steps.indexOf("To Do"))
  }

  const CreateNewTask = (taskName, taskContent) => {
    setTasks(oldArray => [...oldArray, { "step": steps[0], "title": taskName, "content": taskContent }])
  }

  const MoveTaskToNextStep = (taskId) => {

    console.log(tasks[taskId].step)
    let nextStep = steps.indexOf(tasks[taskId].step) + 1;
    console.log(nextStep)
    if (nextStep >= 0 && nextStep < steps.length) {
      tasks[taskId].step = steps[nextStep];
      setTasks([...tasks]);
    }
  }

  const MoveTaskToPreStep = (taskId) => {
    console.log(taskId)
    let preStep = steps.indexOf(tasks[taskId].step) - 1;
    if (preStep >= 0 && preStep < steps.length) {
      tasks[taskId].step = steps[preStep];
      setTasks([...tasks]);
      
    }
  }
  return (
    <MainCard id='kanban-dashboard' title="Kanban Dashboard">
      <AddStep AddNewStep={AddNewStep} />
      <CreateTask CreateNewTask={CreateNewTask} />
      {/* {tasks.map()} */}
      <Stack gap={2} className='asc' direction="row">
        {steps.map(object => <StepColumn title={object} key={object} tasks={tasks} MoveTaskToNextStep={MoveTaskToNextStep} MoveTaskToPreStep={MoveTaskToPreStep} />)}
      </Stack>
    </MainCard>);
};

export default Kanbanboard;
