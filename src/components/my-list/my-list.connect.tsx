import {connect} from "react-redux";
import MyList from "@components/my-list/my-list";
import {loadFavorite} from "@components/my-list/operations/load-favorite";

const mapStateToProps = (state) => ({
  favoriteFilms: state.user.favoriteFilms,
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorite() {
    dispatch(loadFavorite());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyList);
