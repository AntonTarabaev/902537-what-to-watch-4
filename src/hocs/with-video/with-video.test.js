import withVideo from "@root/hocs/with-video/with-video";

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

const MockComponentWrapped = withVideo(MockComponent);

it(`withVideo rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      src={``}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
