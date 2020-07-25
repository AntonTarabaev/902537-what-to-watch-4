import SignIn from "@components/sign-in/sign-in";
import {AuthorizationStatus} from "@constants/main";
import history from "@root/history";
import {Router} from "react-router-dom";

describe(`SignIn component render correctly`, () => {
  it(`with correct data`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <SignIn
            emailIsValid={true}
            passwordIsValid={true}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            validateData={() => {}}
            onSubmit={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with incorrect data`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <SignIn
            emailIsValid={false}
            passwordIsValid={false}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            validateData={() => {}}
            onSubmit={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
