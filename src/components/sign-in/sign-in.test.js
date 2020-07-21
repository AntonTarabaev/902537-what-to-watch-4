import SignIn from "@components/sign-in/sign-in";

it(`SignIn component render correctly`, () => {
  const tree = renderer.create(
      <SignIn
        onSubmit={() => {}}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
