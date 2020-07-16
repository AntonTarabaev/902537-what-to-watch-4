import withVideo from "@root/hocs/with-video/with-video";

const MockComponent = (props) => {
  const {onPlayButtonClick, onFullscreenButtonClick, children} = props;

  return (
    <div>
      <button id={`play`} onClick={onPlayButtonClick}/>
      <button id={`fullscreen`} onClick={onFullscreenButtonClick}/>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  onPlayButtonClick: PropTypes.func.isRequired,
  onFullscreenButtonClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

describe(`withVideo work properly`, () => {
  it(`Checks that HOC's callback turn on video (play)`, () => {
    const MockComponentWrapped = withVideo(MockComponent);
    const wrapper = mount(
        <MockComponentWrapped
          src=""
        />
    );

    window.HTMLMediaElement.prototype.play = () => {};

    const {_videoRef} = wrapper.instance();

    jest.spyOn(_videoRef.current, `play`);

    wrapper.instance().componentDidMount();

    wrapper.find(`#play`).simulate(`click`);

    expect(_videoRef.current.play).toHaveBeenCalledTimes(1);
  });

  it(`Checks that HOC's callback turn off video (pause)`, () => {
    const MockComponentWrapped = withVideo(MockComponent);
    const wrapper = mount(
        <MockComponentWrapped
          src=""
        />
    );

    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};

    const {_videoRef} = wrapper.instance();

    jest.spyOn(_videoRef.current, `pause`);

    wrapper.instance().componentDidMount();

    wrapper.find(`#play`).simulate(`click`);
    wrapper.find(`#play`).simulate(`click`);

    expect(_videoRef.current.pause).toHaveBeenCalledTimes(1);
  });

  it(`Checks that HOC's callback turn on fullscreen`, () => {
    const MockComponentWrapped = withVideo(MockComponent);
    const wrapper = mount(
        <MockComponentWrapped
          src=""
        />
    );

    window.HTMLMediaElement.prototype.requestFullscreen = () => {};

    const {_videoRef} = wrapper.instance();

    jest.spyOn(_videoRef.current, `requestFullscreen`);

    wrapper.instance().componentDidMount();

    wrapper.find(`#fullscreen`).simulate(`click`);

    expect(_videoRef.current.requestFullscreen).toHaveBeenCalledTimes(1);
  });
});
