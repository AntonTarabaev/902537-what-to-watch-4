import SignIn from "@components/sign-in/sign-in";
import history from "@root/history";
import {Router} from "react-router-dom";
import {AuthorizationStatus} from "@root/types";

it(`Should prevent SignIn component form default behavior`, () => {
  const onSubmit = jest.fn();
  const signIn = mount(
      <Router history={history}>
        <SignIn
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          emailIsValid={true}
          passwordIsValid={true}
          onSubmit={onSubmit}
          validateData={() => {}}
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
