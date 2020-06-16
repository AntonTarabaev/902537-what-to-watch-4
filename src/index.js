import ReactDOM from "react-dom";
import App from "@root/components/app/app";
import {PromoSetting, FilmsTitles} from "@root/consts/main";

ReactDOM.render(
    <App
      promoTitle={PromoSetting.TITLE}
      promoGenre={PromoSetting.GENRE}
      promoReleaseDate={PromoSetting.RELEASE_DATE}
      filmsTitles={FilmsTitles}
    />,
    document.querySelector(`#root`)
);
