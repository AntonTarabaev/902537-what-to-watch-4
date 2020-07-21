import {connect} from "react-redux";
import App from "@components/app/app";
import {changeActiveFilmId} from "@components/app/actions/change-active-film-id";

const mapStateToProps = (state) => ({
  isLoaded: state.data.isLoaded,
  activeFilmId: state.data.activeFilmId,
});

const mapDispatchToProps = (dispatch) => ({
  onFilmCardElementClick(targetFilmId) {
    dispatch(changeActiveFilmId(targetFilmId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
