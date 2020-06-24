import FilmCard from "@root/components/film-card/film-card";

class FilmsList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmCard: ``,
    };

    this._filmCardHoverHandler = this._filmCardHoverHandler.bind(this);
  }

  render() {
    const {films, onFilmCardElementClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <FilmCard
            key={`${i}-${film.poster}`}
            onFilmCardHover={this._filmCardHoverHandler}
            onFilmCardElementClick={onFilmCardElementClick}
            film={film}
          />
        ))}
      </div>
    );
  }

  _filmCardHoverHandler(film) {
    this.setState({
      activeFilmCard: film,
    });
  }
}

FilmsList.propTypes = {
  onFilmCardElementClick: PropTypes.func.isRequired,
  films: PropTypes.array.isRequired,
};

export default FilmsList;
