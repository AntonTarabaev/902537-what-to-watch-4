import Header from "@components/header/header";
import {AuthorizationStatus} from "@constants/main";
import history from "@root/history";
import {Router} from "react-router-dom";

describe(`SignIn component render correctly`, () => {
  it(`when authorized`, () => {
    const tree = renderer.create(
        <Router history={history}>
          <Header
            userData={{
              avatar: `path`,
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
            userData={{}}
            authorizationStatus={AuthorizationStatus.NO_AUTH}
          />
        </Router>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
