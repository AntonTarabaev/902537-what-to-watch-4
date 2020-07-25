import Logo from "@components/logo/logo";
import history from "@root/history";
import {Router} from "react-router-dom";

it(`Logo component render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <Logo/>
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
