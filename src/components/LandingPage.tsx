import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import mainLogo from'../gl.png';
import {withRouter} from 'react-router-dom';

const LandingPage = ({history}:any) => {

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        minHeight: '1200px',
        [theme.breakpoints.down('sm')]: {
        minHeight: '900px',
        },
        [theme.breakpoints.down('xs')]: {
          minHeight: 'none'
          },
      },
      gridContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        maxWidth: '1200px',
        [theme.breakpoints.down('xs')]: {
          marginBottom: '70px'
        },
      },
      gridItem: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
      },
      paper: {
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        fontSize: '25px',
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignContent: 'center',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
      },
      title: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
      },
      button: {
        backgroundColor: 'green',
        width: '50%',
        height: '70px',
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
          width: '100%',
          position: 'fixed',
          bottom:"0",
        },
      },
    }),
  );

  const classes = useStyles();

  const Instructions = ["Create your own, personal game list", "Rate and recommend games you've played", "Check games your friends play"]

  return (
    <div className={classes.root}>
      <div className={classes.title}><img src={mainLogo} alt='' ></img></div>
      <Grid className={classes.gridContainer} container spacing={4}>
        {Instructions.map((el, i) =>
          <Grid key={i} className={classes.gridItem} item xs>
            <Paper className={classes.paper}><div>{el}</div></Paper>
          </Grid>
        )}
      </Grid>
      <Button onClick={()=>history.push('/')} className={classes.button} >LET'S START</Button>
    </div>
  );
}

export default withRouter(LandingPage);