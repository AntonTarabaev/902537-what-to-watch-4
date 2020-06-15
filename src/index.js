import React from "react";
import ReactDOM from "react-dom";
import App from "@/components/app/app";
import {PromoSetting, FilmsTitles} from "@/consts";

ReactDOM.render(
    <App
      promoTitle={PromoSetting.TITLE}
      promoGenre={PromoSetting.GENRE}
      promoReleaseDate={PromoSetting.RELEASE_DATE}
      filmsTitles={FilmsTitles}
    />,
    document.querySelector(`#root`)
);
