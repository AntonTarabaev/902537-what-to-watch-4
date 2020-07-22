import ReactDOM from "react-dom";
import App from "@components/app/app.connect";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "@root/rootReducer";
import {createAPI} from "@root/api";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {loadData} from "@components/app/operations/load-data";
import {requireAuthorization} from "@components/sign-in/actions/require-authorization";
import {AuthorizationStatus} from "@constants/main";
import {checkAuth} from "@components/sign-in/operations/check-auth";

const onUnauthorized = () => {
  store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH));
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
