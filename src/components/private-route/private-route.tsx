import {Route, Redirect} from "react-router-dom";
import {AuthorizationStatus} from "@root/types";
import {AppRoutes} from "@constants/routes";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(componentProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(componentProps)
            : <Redirect to={AppRoutes.LOGIN}/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  render: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.oneOf([AuthorizationStatus.NO_AUTH, AuthorizationStatus.AUTH]).isRequired,
};

export default PrivateRoute;
