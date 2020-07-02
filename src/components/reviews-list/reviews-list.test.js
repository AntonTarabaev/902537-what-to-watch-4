import ReviewsList from "@components/reviews-list/reviews-list";

const comments = [
  {
    author: `John Doe`,
    rating: 8.9,
    date: new Date(8475893),
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Sed sed nisi sed augue convallis suscipit in sed felis. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra.`,
  },
  {
    author: `Robert Rodrigues`,
    rating: 5.4,
    date: new Date(4231284),
    comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna`,
  }
];

it(`Should ReviewsList render correctly`, () => {
  const tree = renderer.create(
      <ReviewsList
        comments={comments}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
