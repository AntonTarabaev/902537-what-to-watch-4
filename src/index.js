import React from "react";
import ReactDOM from "react-dom";
import App from "@/components/app/app";
import {PromoSetting} from "@/consts";

ReactDOM.render(
    <App
      promoTitle={PromoSetting.TITLE}
      promoGenre={PromoSetting.GENRE}
      promoReleaseDate={PromoSetting.RELEASE_DATE}
    />,
    document.querySelector(`#root`)
);
