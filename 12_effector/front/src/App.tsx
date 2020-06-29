import React from "react";

import {
  Switch,
  Route,
  Redirect,
  useHistory,
  RouteProps,
} from "react-router-dom";

import Container from "shared/components/Container";
import Notification from "shared/components/Notification";
import DeviceService from "services/DeviceService";

import Main from "screens/Main";
import SearchGoods from "screens/SearchGoods";
import Auth from "screens/Auth";
import NotFound from "screens/NotFound";

import { useStore } from "effector-react";

import { $isAuth } from './domains/auth'

function PrivateRoute(props: RouteProps) {
  const isAuth = useStore($isAuth)
  return isAuth ? <Route {...props} /> : <Redirect to="/login" />;
}

function App() {
  const history = useHistory();
  const isAuth = useStore($isAuth)
  React.useEffect(() => {
    if (isAuth) {
      history.push("/");
    }
  }, [isAuth, history]);

  return (
    <Container>
      <Switch>
        <PrivateRoute exact path="/" component={Main} />
        <PrivateRoute path="/search" component={SearchGoods} />
        <Route path="/login" component={Auth} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Notification />
      <DeviceService />
    </Container>
  );
}

export default () => <App />;
