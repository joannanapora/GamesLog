import {Switch, Route, withRouter} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Nav from './components/Nav/Nav'
import GameCardList from './components/Games/GameCardList';
import MyLog from './components/MyGames/MyAllGames';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const App = () => {

  const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      height: '100%'
      },
    }));


  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Nav/>
    <Switch>
    <Route exact path='/allgames' component={GameCardList} />
    <Route exact path='/' component={LandingPage} />
    <Route exact path='/mygames' component={MyLog} />
</Switch>
</div>
  );
}

export default withRouter(App);
