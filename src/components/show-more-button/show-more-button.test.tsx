import ShowMoreButton from "@components/show-more-button/show-more-button";
import * as renderer from "react-test-renderer";
import {noop} from "@utils/common";

it(`Should ShowMoreButton render correctly`, () => {
  const tree = renderer.create(
      <ShowMoreButton
        onShowMoreButtonClick={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
