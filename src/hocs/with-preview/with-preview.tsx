const withPreview = (Component) => {
  class WithPreview extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();
    }

    componentDidMount() {
      const {src, poster} = this.props;
      const video = this._videoRef.current;

      video.src = src;
      video.poster = poster;
      video.autoplay = true;
      video.muted = true;
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.src = ``;
      video.autoplay = null;
      video.muted = null;
      video.poster = null;
    }

    render() {
      return (
        <Component
          {...this.props}
        >
          <video
            ref={this._videoRef}
          />
        </Component>
      );
    }
  }

  WithPreview.propTypes = {
    src: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  };

  return WithPreview;
};

export default withPreview;
