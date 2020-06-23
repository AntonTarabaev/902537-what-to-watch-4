import Main from "@root/components/main/main";

const headerClickHandler = () => {};

const App = (props) => {
  const {promo, films} = props;

  return (
    <Main
      promo={promo}
      films={films}
      onHeaderClick={headerClickHandler}
    />
  );
};

App.propTypes = {
  promo: PropTypes.shape({
    TITLE: PropTypes.string.isRequired,
    GENRE: PropTypes.string.isRequired,
    RELEASE_DATE: PropTypes.number.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  })).isRequired,
};

export default App;
