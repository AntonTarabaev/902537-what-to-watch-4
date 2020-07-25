import SignIn from "@components/sign-in/sign-in";
import {AuthorizationStatus} from "@constants/main";
import history from "@root/history";
import {Router} from "react-router-dom";

it(`Should prevent SignIn component form default behavior`, () => {
  const onSubmit = jest.fn();
  const signIn = mount(
      <Router history={history}>
        <SignIn
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          onSubmit={onSubmit}
        />
      </Router>
  );

  const form = signIn.find(`form`);
  const formSendPrevention = jest.fn();
  form.simulate(`submit`, {
    preventDefault: formSendPrevention,
  });

  expect(onSubmit).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});
