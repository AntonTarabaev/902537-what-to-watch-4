import withVideo from "@root/hocs/with-video/with-video";
import {mount} from "enzyme";

interface Props {
  onPlayButtonClick: () => void;
  onFullscreenButtonClick: () => void;
  children: React.ReactNode;
}

const MockComponent = (props: Props) => {
  const {onPlayButtonClick, onFullscreenButtonClick, children} = props;

  return (
    <div>
      <button id={`play`} onClick={onPlayButtonClick}/>
      <button id={`fullscreen`} onClick={onFullscreenButtonClick}/>
      {children}
    </div>
  );
};

describe(`withVideo work properly`, () => {
  it(`Checks that HOC's callback turn on video (play)`, () => {
    const MockComponentWrapped = withVideo(MockComponent);
    const wrapper = mount(
        <MockComponentWrapped
          src=""
        />
    );

    window.HTMLMediaElement.prototype.play = () => Promise.resolve();

    const {videoRef} = wrapper.instance();

    jest.spyOn(videoRef.current, `play`);

    wrapper.instance().componentDidMount();

    wrapper.find(`#play`).simulate(`click`);

    expect(videoRef.current.play).toHaveBeenCalledTimes(1);
  });

  it(`Checks that HOC's callback turn off video (pause)`, () => {
    const MockComponentWrapped = withVideo(MockComponent);
    const wrapper = mount(
        <MockComponentWrapped
          src=""
        />
    );

    window.HTMLMediaElement.prototype.play = () => Promise.resolve();
    window.HTMLMediaElement.prototype.pause = () => Promise.resolve();

    const {videoRef} = wrapper.instance();

    jest.spyOn(videoRef.current, `pause`);

    wrapper.instance().componentDidMount();

    wrapper.find(`#play`).simulate(`click`);
    wrapper.find(`#play`).simulate(`click`);

    expect(videoRef.current.pause).toHaveBeenCalledTimes(1);
  });

  it(`Checks that HOC's callback turn on fullscreen`, () => {
    const MockComponentWrapped = withVideo(MockComponent);
    const wrapper = mount(
        <MockComponentWrapped
          src=""
        />
    );

    window.HTMLMediaElement.prototype.requestFullscreen = () => Promise.resolve();

    const {videoRef} = wrapper.instance();

    jest.spyOn(videoRef.current, `requestFullscreen`);

    wrapper.instance().componentDidMount();

    wrapper.find(`#fullscreen`).simulate(`click`);

    expect(videoRef.current.requestFullscreen).toHaveBeenCalledTimes(1);
  });
});
