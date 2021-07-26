import {Switch, Route, withRouter} from 'react-router-dom';
import MainContainer from './components/MainContainer';
import LandingPage from './components/LandingPage';

const App = () => {

  return (
    <Switch>
    <Route exact path='/' component={MainContainer} />
    <Route exact path='/welcome' component={LandingPage} />
</Switch>
  );
}

export default withRouter(App);
