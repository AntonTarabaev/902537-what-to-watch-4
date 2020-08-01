import {ServerRoutes} from "@constants/routes";
import {requireAuthorization} from "@components/sign-in/actions/require-authorization";
import {AuthorizationStatus} from "@root/types";
import {setUserData} from "@components/sign-in/actions/set-user-data";
import {parseUser} from "@root/adapters/user";
import history from "@root/history";

export const login = (authData) => (dispatch, getState, api) => {
  return api.post(ServerRoutes.LOGIN, {
    email: authData.login,
    password: authData.password,
  })
    .then((response) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setUserData(parseUser(response.data)));
      history.goBack();
    });
};
