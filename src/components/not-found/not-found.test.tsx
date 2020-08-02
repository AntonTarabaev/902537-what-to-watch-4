import {Router} from "react-router-dom";
import history from "@root/history";
import NotFound from "@components/not-found/not-found";
import * as renderer from "react-test-renderer";

it(`NotFound component rendered correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <NotFound/>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
