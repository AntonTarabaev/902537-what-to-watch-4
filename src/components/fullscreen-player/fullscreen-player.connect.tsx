import {getFilmById} from "@components/film-page/selectors/get-film-by-id";
import {connect} from "react-redux";
import FullscreenPlayer from "@components/fullscreen-player/fullscreen-player";
import withVideo from "@root/hocs/with-video/with-video";

const mapStateToProps = (state, ownProps) => {
  const film = getFilmById(state, ownProps.match.params.id);

  return {
    film,
    src: film.video,
  };
};

export default connect(mapStateToProps)(withVideo(FullscreenPlayer));
