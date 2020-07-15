import ReactDOM from "react-dom";
import App from "@components/app/app.connect";
import {PromoSetting} from "@constants/main";
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "@root/rootReducer";

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDOM.render(
    <Provider store={store}>
      <App
        promo={PromoSetting}
      />
    </Provider>,
    document.querySelector(`#root`)
);
