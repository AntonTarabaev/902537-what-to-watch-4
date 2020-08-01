import {ServerRoutes} from "@constants/routes";
import {requireAuthorization} from "@components/sign-in/actions/require-authorization";
import {AuthorizationStatus} from "@root/types";
import {setUserData} from "@components/sign-in/actions/set-user-data";
import {parseUser} from "@root/adapters/user";

export const checkAuth = () => (dispatch, getState, api) => {
  return api.get(ServerRoutes.LOGIN)
    .then((response) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setUserData(parseUser(response.data)));
    });
};
