import withPreview from "@root/hocs/with-preview/with-preview";
import * as renderer from "react-test-renderer";

interface Props {
  children: React.ReactNode;
}

const MockComponent = (props: Props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
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
