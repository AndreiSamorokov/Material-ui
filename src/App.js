import React from 'react'
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import CheckBox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <TextField
        variant="outlined"
        color="secondary"
        type="eamil"
        label="The Email"
        placeholder="xxx@yyy.com"
      />
      <div>
        <FormControlLabel
          control = {
            <CheckBox
              checked = {checked}
              onChange = { (e) => setChecked(e.target.checked)}
              inputProps={{
                "aria-label" : 'secondry checkbox'
              }}
            ></CheckBox>
          }
          label = 'Test Check Box'
        >


        </FormControlLabel> 
        </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <CheckBoxExample />
        <ButtonGroup>
          <Button 
            startIcon = {<SaveIcon />} 
            size="large" 
            style={{fontSize : 20}}
            variant="contained" 
            color="primary"
          >
            Save
          </Button>
          <Button  
            endIcon = {<DeleteIcon />}
            size="large" 
            style={{fontSize : 20}}
            variant="contained" 
            color="secondary"
          >
            Discard
          </Button>

        </ButtonGroup>
        
      </header>
    </div>
  );
}

export default App;
