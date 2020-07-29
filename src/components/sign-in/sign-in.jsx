import Footer from "@components/footer/footer";
import {ErrorMessage} from "@components/sign-in/consts";
import Logo from "@components/logo/logo";
import {AppRoutes} from "@constants/routes";
import {AuthorizationStatus} from "@constants/main";
import {Redirect} from "react-router-dom";

class SignIn extends React.PureComponent {
  constructor(props) {
    super(props);

    this._loginRef = React.createRef();
    this._passwordRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onSubmit, validateData} = this.props;
    const email = this._loginRef.current.value;
    const password = this._passwordRef.current.value;

    evt.preventDefault();

    validateData(email, password);

    onSubmit({
      login: email,
      password,
    });
  }

  render() {
    const {authorizationStatus, emailIsValid, passwordIsValid} = this.props;

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
                    ref={this._loginRef}
                  />
                  <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
                </div>
                <div className={`sign-in__field ${!passwordIsValid && `sign-in__field--error`}`}>
                  <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"
                    autoComplete="off"
                    ref={this._passwordRef}
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
  authorizationStatus: PropTypes.oneOf([AuthorizationStatus.NO_AUTH, AuthorizationStatus.AUTH]).isRequired,
  onSubmit: PropTypes.func.isRequired,
  emailIsValid: PropTypes.bool.isRequired,
  passwordIsValid: PropTypes.bool.isRequired,
  validateData: PropTypes.func.isRequired,
};

export default SignIn;
