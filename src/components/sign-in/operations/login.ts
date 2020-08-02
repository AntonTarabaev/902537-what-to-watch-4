import {ServerRoutes} from "@constants/routes";
import {requireAuthorization} from "@components/sign-in/actions/require-authorization";
import {AuthorizationStatus} from "@root/types";
import {setUserData} from "@components/sign-in/actions/set-user-data";
import {parseUser} from "@root/adapters/user";
import history from "@root/history";
import {Dispatch} from "redux";
import {AxiosInstance} from "axios";
import {UserActions, UserState} from "@components/sign-in/types";

export const login = (authData: {login: string; password: string}) => (dispatch: Dispatch<UserActions>, getState: () => UserState, api: AxiosInstance) => {
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
