import {connect} from "react-redux";
import App from "@components/app/app";
import {changeActiveFilmId} from "@components/app/actions/change-active-film-id";
import {getLoadedStatus} from "@components/app/selectors/get-loaded-status";
import {getActiveFilmId} from "@components/app/selectors/get-active-film-id";

const mapStateToProps = (state) => ({
  isLoaded: getLoadedStatus(state),
  activeFilmId: getActiveFilmId(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFilmCardElementClick(targetFilmId) {
    dispatch(changeActiveFilmId(targetFilmId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
