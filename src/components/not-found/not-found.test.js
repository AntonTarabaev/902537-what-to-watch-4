import {Router} from "react-router-dom";
import history from "@root/history";
import NotFound from "@components/not-found/not-found";

it(`Loader component rendered correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <NotFound/>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
