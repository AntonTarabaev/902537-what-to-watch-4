import {ServerRoutes} from "@constants/routes";
import {requireAuthorization} from "@components/sign-in/actions/require-authorization";
import {AuthorizationStatus} from "@constants/main";

export const checkAuth = () => (dispatch, getState, api) => {
  return api.get(ServerRoutes.LOGIN)
    .then(() => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
    })
    .catch((err) => {
      throw err;
    });
};
