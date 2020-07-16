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

const MockComponentWrapped = withPreview(MockComponent);

it(`withPreview rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      src={`path`}
      poster={`path`}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});
