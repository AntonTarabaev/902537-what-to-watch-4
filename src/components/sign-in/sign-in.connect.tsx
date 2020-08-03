import {login} from "@components/sign-in/operations/login";
import {connect} from "react-redux";
import SignIn from "@components/sign-in/sign-in";

const mapStateToProps = (state) => ({
  authorizationStatus: state.user.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
