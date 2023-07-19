// material-ui
import MainCard from 'ui-component/cards/MainCard';

import './Task.css';
import { Button } from '@mui/material';

// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const Task = (props) => {
  return (
    <MainCard className="task" title={props.title}>
    <p>{props.content}</p>
    <Button onClick={props.MoveTaskToPreStep}>Pre Step</Button>
    <Button onClick={props.MoveTaskToNextStep}>Next Step</Button>
  </MainCard>
  );
};

export default Task;