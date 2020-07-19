import ReactDOM from "react-dom";
import App from "@components/app/app.connect";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "@root/rootReducer";
import {createAPI} from "@root/api";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {loadData} from "@components/app/operations/load-data";

const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(loadData());

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.querySelector(`#root`)
);
