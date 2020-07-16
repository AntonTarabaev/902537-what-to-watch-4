import withVideo from "@root/hocs/with-video/with-video";
import FullscreenPlayer from "@components/fullscreen-player/fullscreen-player";

const FullscreenPlayerWrapped = withVideo(FullscreenPlayer);

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlayerActive: false,
      };

      this._renderPlayer = this._renderPlayer.bind(this);
      this._togglePlayer = this._togglePlayer.bind(this);
    }

    _togglePlayer() {
      const {isPlayerActive} = this.state;

      this.setState({
        isPlayerActive: !isPlayerActive,
      });
    }

    _renderPlayer(title, src, duration) {
      return (
        <FullscreenPlayerWrapped
          title={title}
          duration={duration}
          src={src}
          onExitButtonClick={this._togglePlayer}
        />
      );
    }

    render() {
      const {isPlayerActive} = this.state;

      return (
        <Component
          {...this.props}
          isPlayerActive={isPlayerActive}
          renderPlayer={this._renderPlayer}
          onPlayButtonClick={this._togglePlayer}
        />);
    }
  }

  return WithVideoPlayer;
};

export default withVideoPlayer;
