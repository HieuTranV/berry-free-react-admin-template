// material-ui
import {
  Button,
  Input
} from '@mui/material';
import { useState } from 'react';



// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const CreateTask = (props) => {
  const [taskName, setTaskName] = useState('');
  const [taskContent, setTaskContent] = useState('');
  return (
    <div>
      <Input placeholder='Task Name' value={taskName} onChange={(e) => setTaskName(e.target.value) }/>
      <Input style={{marginLeft: "10px"}} placeholder='Task Content' value={taskContent} onChange={(e) => setTaskContent(e.target.value) }/>
      <Button onClick={()=>{
        props.CreateNewTask(taskName, taskContent);
        setTaskName('')
        setTaskContent('')
        }}>New Task</Button>
    </div>
  );
};

export default CreateTask;
