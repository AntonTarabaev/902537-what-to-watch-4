import Review from "@components/film-page/film-page-tab-reviews/review/review";

const comment = {
  author: `John Doe`,
  rating: 8.9,
  date: new Date(8475893),
  comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Sed sed nisi sed augue convallis suscipit in sed felis. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`,
};

it(`Review comonent render correctly`, () => {
  const tree = renderer.create(
      <Review
        userComment={comment}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
