import Loader from "@components/loader/loader";
import history from "@root/history";
import {Router} from "react-router-dom";

it(`Loader component rendered correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Loader/>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
