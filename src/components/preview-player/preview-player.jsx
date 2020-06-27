class PreviewPlayer extends React.PureComponent {
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
      <video
        width="280"
        height="175"
        ref={this._videoRef}
      />
    );
  }
}

PreviewPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default PreviewPlayer;
