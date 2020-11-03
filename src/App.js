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

import Container from '@material-ui/core/Container'

import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import Typotograph from '@material-ui/core/Typography'
import 'fontsource-roboto'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import { orange } from '@material-ui/core/colors'

const useStyles = makeStyles({
  root:{
    background: "linear-gradient(45deg, #fe6b88, #ff8253)",
    color:"white",
    border: 0,
    borderRadius: 15,
    padding:'10px 30px',
    marginBottom:20

  }
})

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    }
  }
})

function ButtonStyled(){
  const classes = useStyles();
  return (
    <Button className={classes.root}> Test Styled Button </Button>
  );
}

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
     
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
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <div className="App">
          <header className="App-header">

            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typotograph variant="h6">
                  Material UI
                </Typotograph>
                <Button>
                  Login 
                </Button>
              </Toolbar>       
            </AppBar>

            <Typotograph variant="h2">
              Welcome!
            </Typotograph>

            <Typotograph variant="h3">
              Checking the Material UI 
            </Typotograph>

            <ButtonStyled />

            <Grid container spacing={2} justify="center" >
              <Grid item xs={3} ms={6}>
                <Paper style={{ height:75, width:'100%', }} />             
              </Grid>
              <Grid item xs={3} ms={6}>
                <Paper style={{ height:75, width:'100%', }} />             
              </Grid>
              <Grid item xs={3} ms={6}>
                <Paper style={{ height:75, width:'100%', }} />             
              </Grid>              
            </Grid>
      
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
        </Container>
      </ThemeProvider>
  );
}

export default App;
