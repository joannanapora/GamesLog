import {Switch, Route, withRouter} from 'react-router-dom';
import Nav from './components/Nav/Nav'
import GameCardList from './components/AllGames/AllGamesList';
import MyGames from "./components/MyGamesLog/MyGamesList";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Footer from './components/Footer/Footer';
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
    <Route exact path='/' component={GameCardList} />
    <Route exact path='/mygames' component={MyGames} />
</Switch>
<Footer/>
</div>
  );
}

export default withRouter(App);
