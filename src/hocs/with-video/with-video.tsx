import {PLAYER_POSTER_PATH} from "@constants/main";
import {Subtract} from "utility-types";

interface Props {
  src: string;
}

interface State {
  progress: number;
  isPlaying: boolean;
}

interface InjectingProps {
  progress: number;
  isPlaying: boolean;
  onPlayButtonClick: () => void;
  onFullscreenButtonClick: () => void;
}

const withVideo = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Props & Subtract<P, InjectingProps>;

  class WithVideo extends React.PureComponent<T, State> {
    private readonly videoRef: React.RefObject<HTMLVideoElement>;

    constructor(props) {
      super(props);

      this.videoRef = React.createRef();

      this.state = {
        progress: 0,
        isPlaying: false,
      };

      this.onPlayButtonClick = this.onPlayButtonClick.bind(this);
      this.onFullscreenButtonClick = this.onFullscreenButtonClick.bind(this);
    }

    componentDidMount() {
      const {src} = this.props;
      const video = this.videoRef.current;

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
      const video = this.videoRef.current;

      video.src = ``;
      video.poster = ``;
      video.onplay = null;
      video.onpause = null;
      video.ontimeupdate = null;
    }

    componentDidUpdate() {
      const video = this.videoRef.current;
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
      const video = this.videoRef.current;

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
            ref={this.videoRef}
            onClick={this.onPlayButtonClick}
            className="player__video"
          />
        </Component>
      );
    }
  }

  return WithVideo;
};

export default withVideo;
