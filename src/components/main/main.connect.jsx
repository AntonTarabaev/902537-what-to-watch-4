import {getFilmsByFilter} from "@components/main/selectors/get-films-by-filter";
import {incrementShowingFilms} from "@components/main/actions/increment-showing-films";
import Main from "@components/main/main";
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  films: getFilmsByFilter(state),
  promo: state.data.promo,
  showingFilmsCount: state.mainPage.showingFilmsCount,
});

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(incrementShowingFilms());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
