import {FILM_CARD_ACTIVATION_DELAY} from "@constants/main";
import {Subtract} from "utility-types";

interface State {
  activeFilmCardId: string;
  filmCardActivationTimeout: NodeJS.Timeout;
}

interface InjectingProps {
  activeFilmCardId: string;
  onFilmCardMouseEnter: (filmId: number) => void;
  onFilmCardMouseLeave: () => void;
}

const withActiveFilmCard = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>

  class WithActiveFilmCard extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        activeFilmCardId: `-1`,
        filmCardActivationTimeout: null,
      };

      this._filmCardMouseEnterHandler = this._filmCardMouseEnterHandler.bind(this);
      this._filmCardMouseLeaveHandler = this._filmCardMouseLeaveHandler.bind(this);
    }

    componentWillUnmount() {
      const {filmCardActivationTimeout} = this.state;

      clearTimeout(filmCardActivationTimeout);
    }

    _filmCardMouseEnterHandler(filmId) {
      const timeout = setTimeout(() => {
        this.setState({
          activeFilmCardId: filmId,
        });
      }, FILM_CARD_ACTIVATION_DELAY);

      this.setState({
        filmCardActivationTimeout: timeout,
      });
    }

    _filmCardMouseLeaveHandler() {
      const {filmCardActivationTimeout} = this.state;

      clearTimeout(filmCardActivationTimeout);
      this.setState({
        activeFilmCardId: `-1`,
        filmCardActivationTimeout: null,
      });
    }

    render() {
      const {activeFilmCardId} = this.state;

      return (
        <Component
          {...this.props}
          activeFilmCardId={activeFilmCardId}
          onFilmCardMouseEnter={this._filmCardMouseEnterHandler}
          onFilmCardMouseLeave={this._filmCardMouseLeaveHandler}
        />
      );
    }
  }

  return WithActiveFilmCard;
};

export default withActiveFilmCard;
