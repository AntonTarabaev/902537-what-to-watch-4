import Footer from "@components/footer/footer";
import history from "@root/history";
import {Router} from "react-router-dom";

it(`Footer component render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Footer/>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
