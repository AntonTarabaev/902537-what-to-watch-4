import ReactDOM from "react-dom";
import App from "@root/components/app/app";
import {MOCK_FILMS_COUNT, PromoSetting} from "@root/consts/main";
import {generateFilms} from "@root/mocks/films";

console.log(generateFilms(MOCK_FILMS_COUNT));

ReactDOM.render(
    <App
      promo={PromoSetting}
      films={generateFilms(MOCK_FILMS_COUNT)}
    />,
    document.querySelector(`#root`)
);