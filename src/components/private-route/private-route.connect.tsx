import {connect} from "react-redux";
import PrivateRoute from "@components/private-route/private-route";

const mapStateToProps = (state) => ({
  authorizationStatus: state.user.authorizationStatus,
});

export default connect(mapStateToProps)(PrivateRoute);
