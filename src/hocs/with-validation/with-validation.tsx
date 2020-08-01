import {isValidEmail, isValidPassword} from "@utils/validation";
import {Subtract} from "utility-types";

interface State {
  emailIsValid: boolean;
  passwordIsValid: boolean;
}

interface InjectingProps {
  emailIsValid: boolean;
  passwordIsValid: boolean;
  validateData: (email: string, password: string) => void;
}

const withValidation = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithValidation extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        emailIsValid: true,
        passwordIsValid: true,
      };

      this._validateData = this._validateData.bind(this);
    }

    _validateData(email, password) {
      this.setState({
        emailIsValid: isValidEmail(email),
        passwordIsValid: isValidPassword(password),
      });
    }

    render() {
      const {emailIsValid, passwordIsValid} = this.state;

      return (
        <Component
          {...this.props}
          emailIsValid={emailIsValid}
          passwordIsValid={passwordIsValid}
          validateData={this._validateData}
        />
      );
    }
  }

  return WithValidation;
};

export default withValidation;
