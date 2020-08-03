import {Router} from "react-router-dom";
import customHistory from "@root/customHistory";
import NotFound from "@components/not-found/not-found";
import * as renderer from "react-test-renderer";

it(`NotFound component rendered correctly`, () => {
  const tree = renderer.create(
      <Router history={customHistory}>
        <NotFound/>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
