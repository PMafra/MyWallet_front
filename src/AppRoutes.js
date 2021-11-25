import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import SignIn from "./pages/entrance/sign-in";
import SignUp from "./pages/entrance/sign-up";
import Home from "./pages/main/home";
import NewRecord from "./pages/newRecord/newRecord";

export default function AppRoutes () {

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
    )
}