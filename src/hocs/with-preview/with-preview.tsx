interface Props {
  src: string;
  poster: string;
}

const withPreview = (Component) => {
  class WithPreview extends React.PureComponent<Props, {}> {
    private readonly videoRef: React.RefObject<HTMLVideoElement>;

    constructor(props) {
      super(props);

      this.videoRef = React.createRef();
    }

    componentDidMount() {
      const {src, poster} = this.props;
      const video = this.videoRef.current;

      video.src = src;
      video.poster = poster;
      video.autoplay = true;
      video.muted = true;
    }

    componentWillUnmount() {
      const video = this.videoRef.current;

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
            ref={this.videoRef}
          />
        </Component>
      );
    }
  }

  return WithPreview;
};

export default withPreview;
