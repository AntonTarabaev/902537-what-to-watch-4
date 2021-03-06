import PreviewPlayer from "@components/preview-player/preview-player";
import * as renderer from "react-test-renderer";

it(`Should PreviewPlayer render correctly`, () => {
  const tree = renderer.create(
      <PreviewPlayer>
        <video/>
      </PreviewPlayer>, {
        createNodeMock() {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
