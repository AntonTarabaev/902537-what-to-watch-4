import Footer from "@components/footer/footer";

it(`Footer component render correctly`, () => {
  const tree = renderer.create(
      <Footer/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
