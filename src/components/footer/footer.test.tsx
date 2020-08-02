import Footer from "@components/footer/footer";
import customHistory from "@root/customHistory";
import {Router} from "react-router-dom";
import * as renderer from "react-test-renderer";

it(`Footer component render correctly`, () => {
  const tree = renderer.create(
      <Router history={customHistory}>
        <Footer/>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
