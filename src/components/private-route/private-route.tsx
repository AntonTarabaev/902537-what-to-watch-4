import {Route, Redirect, RouteProps} from "react-router-dom";
import {AuthorizationStatus} from "@root/types";
import {AppRoutes} from "@constants/routes";

type Props = RouteProps & {
  render: () => React.ReactNode;
  authorizationStatus: AuthorizationStatus;
};

const PrivateRoute: React.FunctionComponent<Props> = (props: Props) => {
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

export default PrivateRoute;
