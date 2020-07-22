import Footer from "@components/footer/footer";

const ErrorMessage = {
  LOGIN: `Please enter a valid email address`,
  PASSWORD: `Password is too short`,
};

const isValidEmail = (email) => {
  return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email);
};

const isValidPassword = (password) => {
  return typeof password === `string` && password.length > 3;
};

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
    const {emailIsValid, passwordIsValid} = this.state;

    return (
      <div className="user-page">
        <header className="page-header user-page__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

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
                  ref={this.loginRef}
                />
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className={`sign-in__field ${!passwordIsValid && `sign-in__field--error`}`}>
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password"
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
  onSubmit: PropTypes.func.isRequired,
};

export default SignIn;
