import ReactDOM from "react-dom";
import App from "@components/app/app";
import {MOCK_FILMS_COUNT, PromoSetting} from "@constants/main";
import {generateFilms} from "@root/mocks/films";

ReactDOM.render(
    <App
      promo={PromoSetting}
      films={generateFilms(MOCK_FILMS_COUNT)}
    />,
    document.querySelector(`#root`)
);
