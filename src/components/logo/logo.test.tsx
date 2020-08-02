import Logo from "@components/logo/logo";
import history from "@root/history";
import {Router} from "react-router-dom";
import * as renderer from "react-test-renderer";

it(`Logo component render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Logo/>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
