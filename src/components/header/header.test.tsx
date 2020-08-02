import Header from "@components/header/header";
import {AuthorizationStatus} from "@root/types";
import history from "@root/history";
import {Router} from "react-router-dom";
import * as renderer from "react-test-renderer";

describe(`SignIn component render correctly`, () => {
  it(`when authorized`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <Header
            userData={{
              id: `123`,
              avatar: `path`,
              name: `path`,
              email: `path`,
            }}
            authorizationStatus={AuthorizationStatus.AUTH}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`when don't authorized`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <Header
            userData={null}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
