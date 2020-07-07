import ShowMoreButton from "@components/show-more-button/show-more-button";

it(`Should ShowMoreButton be clicked`, () => {
  const onShowMoreButtonClick = jest.fn();

  const showMoreButton = shallow(
      <ShowMoreButton
        onShowMoreButtonClick={onShowMoreButtonClick}
      />
  );

  const button = showMoreButton.find(`button.catalog__button`);
  button.simulate(`click`);

  expect(onShowMoreButtonClick).toHaveBeenCalledTimes(1);
});
