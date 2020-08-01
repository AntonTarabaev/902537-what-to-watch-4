const withError = (Component) => {
  class WithError extends React.PureComponent {
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
