import {PLAYER_POSTER_PATH} from "@constants/main";

const withVideo = (Component) => {
  class WithVideo extends React.PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();

      this.state = {
        progress: 0,
        isPlaying: false,
      };

      this.onPlayButtonClick = this.onPlayButtonClick.bind(this);
      this.onFullscreenButtonClick = this.onFullscreenButtonClick.bind(this);
    }

    componentDidMount() {
      const {src} = this.props;
      const video = this._videoRef.current;

      video.src = src;
      video.poster = PLAYER_POSTER_PATH;

      video.onplay = () => this.setState({
        isPlaying: true,
      });

      video.onpause = () => this.setState({
        isPlaying: false,
      });

      video.ontimeupdate = () => this.setState({
        progress: Math.floor(video.currentTime),
      });
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.src = ``;
      video.poster = ``;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {isPlaying} = this.state;

      if (isPlaying) {
        return video.play();
      }
      return video.pause();
    }

    onPlayButtonClick() {
      const {isPlaying} = this.state;

      this.setState({
        isPlaying: !isPlaying,
      });
    }

    onFullscreenButtonClick() {
      const video = this._videoRef.current;

      video.requestFullscreen();
    }

    render() {
      const {progress, isPlaying} = this.state;

      return (
        <Component
          {...this.props}
          progress={progress}
          isPlaying={isPlaying}
          onPlayButtonClick={this.onPlayButtonClick}
          onFullscreenButtonClick={this.onFullscreenButtonClick}
        >
          <video
            ref={this._videoRef}
            onClick={this.onPlayButtonClick}
            className="player__video"
          />
        </Component>
      );
    }
  }

  WithVideo.propTypes = {
    src: PropTypes.string.isRequired,
  };

  return WithVideo;
};

export default withVideo;
