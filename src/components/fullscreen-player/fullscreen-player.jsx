const FullscreenPlayer = (props) => {
  const {
    title,
    duration,
    progress,
    isPlaying,
    onPlayButtonClick,
    onFullscreenButtonClick,
    onExitButtonClick,
    children,
  } = props;

  const progressInPercents = progress / duration * 100;
  const timeElapsed = new Date((duration - progress) * 1000).toISOString().substr(12, 7);

  return (
    <div className="player">
      {children}

      <button type="button" className="player__exit" onClick={onExitButtonClick}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progressInPercents} max="100"/>
            <div className="player__toggler" style={{left: `${progressInPercents}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{timeElapsed}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={onPlayButtonClick}>
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref={isPlaying ? `#pause` : `#play-s`}/>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{title}</div>

          <button type="button" className="player__full-screen" onClick={onFullscreenButtonClick}>
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

FullscreenPlayer.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullscreenButtonClick: PropTypes.func.isRequired,
  onExitButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default FullscreenPlayer;
