// material-ui
import MainCard from 'ui-component/cards/MainCard';

import './StepColumn.css';
import Task from './Task';

// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const StepColumn = (props) => {

  return (
    <MainCard className="step-column" title={props.title}>
      {props.tasks.map((t, i) =>
        t.step == props.title &&
        <Task title={t.title} key={i} step={t.step} content={t.content} MoveTaskToPreStep={()=> props.MoveTaskToPreStep(i)} MoveTaskToNextStep={() => props.MoveTaskToNextStep(i)}/>
      )}
    </MainCard>
  );
};

export default StepColumn;
