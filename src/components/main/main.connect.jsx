import {getFilmsByFilter} from "@components/main/selectors/get-films-by-filter";
import {incrementShowingFilms} from "@components/main/actions/increment-showing-films";
import Main from "@components/main/main";
import {connect} from "react-redux";
import {getPromo} from "@components/main/selectors/get-promo";
import {getShowingFilmsCount} from "@components/main/selectors/get-showing-films-count";

const mapStateToProps = (state) => ({
  films: getFilmsByFilter(state),
  promo: getPromo(state),
  showingFilmsCount: getShowingFilmsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(incrementShowingFilms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
