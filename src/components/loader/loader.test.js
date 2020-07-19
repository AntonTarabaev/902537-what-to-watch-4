import Loader from "@components/loader/loader";

it(`Loader component rendered correctly`, () => {
  const tree = renderer.create(<Loader/>).toJSON();

  expect(tree).toMatchSnapshot();
});
