import Loader from "@components/loader/loader";
import customHistory from "@root/customHistory";
import {Router} from "react-router-dom";
import * as renderer from "react-test-renderer";

it(`Loader component rendered correctly`, () => {
  const tree = renderer.create(
      <Router history={customHistory}>
        <Loader/>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
