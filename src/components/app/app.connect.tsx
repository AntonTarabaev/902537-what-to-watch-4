import {connect} from "react-redux";
import App from "@components/app/app";

const mapStateToProps = (state) => ({
  isLoaded: state.data.isLoaded,
});

export default connect(mapStateToProps)(App);
