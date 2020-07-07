import Main from "@components/main/main.connect";
import FilmPage from "@components/film-page/film-page.connect";
import {AppPages} from "@constants/main";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {MOCK_FILMS} from "@root/mocks/films";

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      page: AppPages.MAIN,
      filmId: null,
    };

    this._onFilmCardElementClick = this._onFilmCardElementClick.bind(this);
  }

  _renderApp() {
    const {page, filmId} = this.state;

    switch (page) {
      case AppPages.MAIN:
        return (
          <Main
            onFilmCardElementClick={this._onFilmCardElementClick}
          />
        );
      case AppPages.DETAILS:
        return (
          <FilmPage
            filmId={filmId}
            onFilmCardElementClick={this._onFilmCardElementClick}
          />
        );
    }

    return null;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-details">
            <FilmPage
              filmId={MOCK_FILMS[1].id}
              onFilmCardElementClick={this._onFilmCardElementClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _onFilmCardElementClick(targetFilmId) {
    this.setState({
      page: AppPages.DETAILS,
      filmId: targetFilmId,
    });
  }
}

export default App;
