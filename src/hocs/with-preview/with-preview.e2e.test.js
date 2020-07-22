import withPreview from "@root/hocs/with-preview/with-preview";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

it(`withPreview work properly`, () => {
  const MockComponentWrapped = withPreview(MockComponent);

  const wrapper = mount(
      <MockComponentWrapped
        poster=""
        src=""
      />
  );

  const {_videoRef} = wrapper.instance();

  wrapper.instance().componentDidMount();

  expect(_videoRef.current.autoplay).toEqual(true);
  expect(_videoRef.current.muted).toEqual(true);
});
