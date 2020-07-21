import Logo from "@components/logo/logo";

it(`Logo component render correctly`, () => {
  const tree = renderer.create(<Logo/>).toJSON();

  expect(tree).toMatchSnapshot();
});
