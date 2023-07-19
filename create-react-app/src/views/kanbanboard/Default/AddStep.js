// material-ui
import {
  Button,
  Input
} from '@mui/material';
import { useState } from 'react';



// ===========================|| DASHBOARD DEFAULT - BAJAJ AREA CHART CARD ||=========================== //

const AddStep = (props) => {
  const [stepName, setStepName] = useState('');

  return (
    <div>
      <Input placeholder='Step Name' value={stepName} onChange={(e) => setStepName(e.target.value) }/>
      <Button onClick={()=>props.AddNewStep(stepName)}>Add Step</Button>
    </div>
  );
};

export default AddStep;
