import Main from "@root/components/main/main";

const headerClickHandler = () => {};

const App = (props) => {
  const {promoTitle, promoGenre, promoReleaseDate, filmsTitles} = props;

  return (
    <Main
      promoTitle={promoTitle}
      promoGenre={promoGenre}
      promoReleaseDate={promoReleaseDate}
      filmsTitles={filmsTitles}
      onHeaderClick={headerClickHandler}
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
