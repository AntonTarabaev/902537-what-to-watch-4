import {isValidEmail, isValidPassword} from "@utils/validation";

const withValidation = (Component) => {
  class WithValidation extends React.PureComponent {
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
