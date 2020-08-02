import SignIn from "@components/sign-in/sign-in";
import history from "@root/history";
import {Router} from "react-router-dom";
import {AuthorizationStatus} from "@root/types";
import * as renderer from "react-test-renderer";
import {noop} from "@utils/common";


describe(`SignIn component render correctly`, () => {
  it(`with correct data`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <SignIn
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            emailIsValid={true}
            passwordIsValid={true}
            validateData={noop}
            onSubmit={noop}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with incorrect data`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <SignIn
            authorizationStatus={AuthorizationStatus.NO_AUTH}
            emailIsValid={false}
            passwordIsValid={false}
            validateData={noop}
            onSubmit={noop}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
