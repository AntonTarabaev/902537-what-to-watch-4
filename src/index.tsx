import * as ReactDOM from "react-dom";
import App from "@components/app/app.connect";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "@root/rootReducer";
import {createAPI} from "@root/api";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {loadData} from "@components/app/operations/load-data";
import {requireAuthorization} from "@components/sign-in/actions/require-authorization";
import {AuthorizationStatus} from "@root/types";
import {checkAuth} from "@components/sign-in/operations/check-auth";
import history from "@root/history";
import {AppRoutes} from "@constants/routes";

const onUnauthorized = () => {
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
  history.push(AppRoutes.LOGIN);
};

const api = createAPI(onUnauthorized);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(loadData());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
