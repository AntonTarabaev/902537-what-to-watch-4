import Footer from "@components/footer/footer";
import withActiveFilmCard from "@root/hocs/with-active-film-card/with-active-film-card";
import FilmsList from "@components/films-list/films-list";
import Header from "@components/header/header.connect";
import {Film} from "@root/types";

interface Props {
  favoriteFilms: Film[];
  loadFavorite: () => void;
}

const FilmsListWrapped = withActiveFilmCard(FilmsList);

class MyList extends React.PureComponent<Props, {}> {
  componentDidMount() {
    const {loadFavorite} = this.props;

    loadFavorite();
  }

  render() {
    const {favoriteFilms} = this.props;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <h1 className="page-title user-page__title">My list</h1>

          <Header/>
        </header>

        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {favoriteFilms &&
          <FilmsListWrapped
            films={favoriteFilms}
          />
          }
        </section>

        <Footer/>
      </div>
    );
  }
}

export default MyList;
