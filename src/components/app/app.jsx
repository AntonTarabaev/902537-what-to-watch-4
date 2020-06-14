import React from "react";
import Main from "@/components/main/main";
import PropTypes from "prop-types";

const App = (props) => {
  const {promoTitle, promoGenre, promoReleaseDate, filmsTitles} = props;

  return (
    <Main
      promoTitle={promoTitle}
      promoGenre={promoGenre}
      promoReleaseDate={promoReleaseDate}
      filmsTitles={filmsTitles}
    />
  );
};

App.propTypes = {
  promoTitle: PropTypes.string.isRequired,
  promoGenre: PropTypes.string.isRequired,
  promoReleaseDate: PropTypes.number.isRequired,
  filmsTitles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default App;
