import Footer from "@components/footer/footer";
import {isValidEmail, isValidPassword} from "@utils/validation";
import {ErrorMessage} from "@components/sign-in/consts";
import Logo from "@components/logo/logo";
import {AuthorizationStatus} from "@constants/main";
import {AppRoutes} from "@constants/routes";
import {Redirect} from "react-router-dom";

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      emailIsValid: true,
      passwordIsValid: true,
    };

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit} = this.props;

    evt.preventDefault();

    this.setState({
      emailIsValid: isValidEmail(this.loginRef.current.value),
      passwordIsValid: isValidPassword(this.passwordRef.current.value),
    });

    onSubmit({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {
    const {authorizationStatus} = this.props;
    const {emailIsValid, passwordIsValid} = this.state;

    return (
      authorizationStatus === AuthorizationStatus.AUTH ?
        <Redirect to={AppRoutes.MAIN}/> :

        <div className="user-page">
          <header className="page-header user-page__head">
            <Logo/>

            <h1 className="page-title user-page__title">Sign in</h1>
          </header>

          <div className="sign-in user-page__content">
            <form
              action="#"
              className="sign-in__form"
              onSubmit={this.handleSubmit}
            >
              {(!emailIsValid || !passwordIsValid) &&
                <div className="sign-in__message">
                  {!emailIsValid && <p>{ErrorMessage.LOGIN}</p>}
                  {!passwordIsValid && <p>{ErrorMessage.PASSWORD}</p>}
                </div>
              }
              <div className="sign-in__fields">
                <div className={`sign-in__field ${!emailIsValid && `sign-in__field--error`}`}>
                  <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email"
                    autoComplete="email"
                    ref={this.loginRef}
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
                </div>
                <div className={`sign-in__field ${!passwordIsValid && `sign-in__field--error`}`}>
                  <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"
                    autoComplete="off"
                    ref={this.passwordRef}
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
                </div>
              </div>
              <div className="sign-in__submit">
                <button className="sign-in__btn" type="submit">Sign in</button>
              </div>
            </form>
          </div>

          <Footer/>
        </div>
    );
  }
}

SignIn.propTypes = {
  authorizationStatus: PropTypes.oneOf([AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH]),
  onSubmit: PropTypes.func.isRequired,
};

export default SignIn;
