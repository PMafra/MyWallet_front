import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import SignIn from './pages/entrance/Sign-in';
import SignUp from './pages/entrance/Sign-up';
import Home from './pages/main/Home';
import NewRecord from './pages/newRecord/NewRecord';

export default function AppRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition timeout={300} classNames="fade-drop" key={location.key}>
        <Switch location={location}>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/new-record" component={NewRecord} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
}
