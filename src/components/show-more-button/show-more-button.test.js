import ShowMoreButton from "@components/show-more-button/show-more-button";

it(`Should ShowMoreButton render correctly`, () => {
  const tree = renderer.create(
      <ShowMoreButton
        onShowMoreButtonClick={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
