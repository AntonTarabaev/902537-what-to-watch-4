import withVideoPlayer from "@root/hocs/with-video-player/with-video-player";

const MockComponent = () => <div/>;
const MockComponentWrapped = withVideoPlayer(MockComponent);

describe(`withVideoPlayer work properly`, () => {
  it(`Should get correct state`, () => {
    const wrapper = shallow(<MockComponentWrapped/>);

    expect(wrapper.state().isPlayerActive).toEqual(false);
  });

  it(`Should toggle player state`, () => {
    const wrapper = shallow(<MockComponentWrapped/>);

    expect(wrapper.state().isPlayerActive).toEqual(false);

    wrapper.props().onPlayButtonClick();
    expect(wrapper.state().isPlayerActive).toEqual(true);

    wrapper.props().onPlayButtonClick();
    expect(wrapper.state().isPlayerActive).toEqual(false);
  });
});
