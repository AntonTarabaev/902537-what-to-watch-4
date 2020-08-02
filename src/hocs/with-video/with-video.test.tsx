import withVideo from "@root/hocs/with-video/with-video";
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
