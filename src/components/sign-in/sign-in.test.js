import SignIn from "@components/sign-in/sign-in";
import history from "@root/history";
import {Router} from "react-router-dom";

describe(`SignIn component render correctly`, () => {
  it(`with correct data`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <SignIn
            emailIsValid={true}
            passwordIsValid={true}
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
            validateData={() => {}}
            onSubmit={() => {}}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
