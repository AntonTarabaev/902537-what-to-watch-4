import Main from "@root/components/main/main";
import {AppPages} from "@root/consts/main";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import FilmPage from "@root/components/film-page/film-page";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: AppPages.MAIN,
      film: null,
    };
  }

  _renderApp() {
    const {promo, films} = this.props;
    const {page, film} = this.state;

    if (films) {
      switch (page) {
        case AppPages.MAIN:
          return (
            <Main
              promo={promo}
              films={films}
              onFilmCardElementClick={(targetFilm) => {
                this.setState({
                  page: AppPages.DETAILS,
                  film: targetFilm,
                });
              }}
            />
          );
        case AppPages.DETAILS:
          return (
            <FilmPage
              film={film}
            />
          );
      }
    }

    return null;
  }

  render() {
    const {films} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-details">
            <FilmPage
              film={films[1]}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  promo: PropTypes.object.isRequired,
  films: PropTypes.array.isRequired,
};

export default App;
