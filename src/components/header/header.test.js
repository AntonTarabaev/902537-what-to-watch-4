import Header from "@components/header/header";
import {AuthorizationStatus} from "@constants/main";

describe(`SignIn component render correctly`, () => {
  it(`when authorized`, () => {
    const tree = renderer.create(
        <Header
          authorizationStatus={AuthorizationStatus.AUTH}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`when don't authorized`, () => {
    const tree = renderer.create(
        <Header
          authorizationStatus={AuthorizationStatus.NO_AUTH}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
