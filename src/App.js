import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import GoIcon from '@material-ui/icons/Flag'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button 
          startIcon = {<SaveIcon />}
          endIcon = {<GoIcon />}
          size="large" 
          style={{fontSize : 20}}
          variant="contained" 
          color="secondary"
        >
          Secondary
        </Button>
      </header>
    </div>
  );
}

export default App;
