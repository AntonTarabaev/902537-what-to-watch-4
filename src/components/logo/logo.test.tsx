import Logo from "@components/logo/logo";
import customHistory from "@root/customHistory";
import {Router} from "react-router-dom";
import * as renderer from "react-test-renderer";

it(`Logo component render correctly`, () => {
  const tree = renderer.create(
      <Router history={customHistory}>
        <Logo/>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
