import {Subtract} from "utility-types";

interface State {
  isErrored: boolean;
}

interface InjectingProps {
  isErrored: boolean;
  toggleError: (isErrored: boolean) => void;
}

const withError = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>

  class WithError extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        isErrored: false,
      };

      this.toggleError = this.toggleError.bind(this);
    }

    toggleError(isErrored) {
      this.setState({
        isErrored,
      });
    }

    render() {
      const {isErrored} = this.state;

      return (
        <Component
          {...this.props}
          isErrored={isErrored}
          toggleError={this.toggleError}
        />
      );
    }
  }

  return WithError;
};

export default withError;
