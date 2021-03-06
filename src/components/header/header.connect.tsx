import {connect} from "react-redux";
import Header from "@components/header/header";

const mapStateToProps = (state) => ({
  authorizationStatus: state.user.authorizationStatus,
  userData: state.user.userData,
});

export default connect(mapStateToProps)(Header);
