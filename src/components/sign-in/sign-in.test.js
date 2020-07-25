import SignIn from "@components/sign-in/sign-in";
import {AuthorizationStatus} from "@constants/main";
import history from "@root/history";
import {Router} from "react-router-dom";

it(`SignIn component render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SignIn
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          onSubmit={() => {}}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
