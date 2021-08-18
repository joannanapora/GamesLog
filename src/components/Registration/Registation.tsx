import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import logopage from '../../assets/games/loginlogo.png'
import TextField from '@material-ui/core/TextField'; 
import GLButton from '../Buttons/GLButton';
import yahoo from "../../assets/login/yahoo.png";
import gmail from "../../assets/login/gmail.png";
import fb from "../../assets/login/facebook.png";
import { IconButton } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        padding: '30px',
        [theme.breakpoints.down('sm')]: {
           padding: 0,
      },
    },
    form: {
              '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '330px',
                fontFamily: 'Monda'
              },
            },
    paper: {
      backgroundColor: 'transparent',
      padding: 20,
      boxShadow: 'none',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
          minHeight: 0,
          paddingBottom: 40,
          padding: 0
    },
    },
    control: {
      padding: theme.spacing(2),
    },
    logologin: {
        width: '200px',
        padding: 20,
        [theme.breakpoints.down('xs')]: {
            padding: 0,
            marginLeft: '200px',
            width: '100px',
            display: 'flex',
       },
    }
  }),
);

const Registration = () => {
  const [spacing, setSpacing] = React.useState<GridSpacing>(3);
  const classes = useStyles();


  return (
      <div className={classes.root} >
        <Grid container justifyContent="center" spacing={spacing}>
        <Grid item>
            
                  <img className={classes.logologin} src={logopage} alt='' ></img>
        
            </Grid>
            <Grid item>
              <Paper className={classes.paper}>
                 <div>
                  <h4>Login to your account</h4>
              <form className={classes.form} noValidate autoComplete="off">
       <div>
         <TextField
           
           id="filled-required"
           label="e-mail"
          variant="filled"
        />
      </div>
      <div>
        <TextField
       
          id="filled-required"
          label="password"
          variant="filled"
          type='password'
        />
      </div>
    </form>
    <GLButton
    onClick={()=>console.log('sdda')}
    label='Submit'
    />
    </div>
    <div>
    <h4>Register new account</h4>
              <form className={classes.form} noValidate autoComplete="off">
       <div>
         <TextField
           required
           id="filled-required"
           label="e-mail"
          variant="filled"
        />
      </div>
      <div>
         <TextField
           required
           id="filled-required"
           label="password"
          variant="filled"
          type='password'
        />
      </div>
      <div>
         <TextField
           required
           id="filled-required"
           label="confirm password"
          variant="filled"
          type='password'
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="username"
          variant="filled"
        />
      </div>
    </form>
    <GLButton
    onClick={()=>console.log('sdda')}
    label='Submit'
    />
    </div>
    <div>
        <h4>
            Continue with
        </h4>
        <div style={{display: 'flex', justifyContent: 'space-between'}} >
            <IconButton>
                <img height='30px' src={fb}/>
            </IconButton>
            <IconButton>
            <img height='30px' src={gmail}/>
            </IconButton>
         
            <IconButton>
            <img height='30px' src={yahoo}/>

            </IconButton>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}} >
            <div>Facebook</div>
         <div>Google</div> 
         <div>Yahoo!</div>
        </div>
    </div>
              </Paper>
            </Grid>
        </Grid>
        </div>
  );
};


export default Registration;