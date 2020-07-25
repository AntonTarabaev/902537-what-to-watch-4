import Logo from "@components/logo/logo";
import {AuthorizationStatus} from "@constants/main";
import {Link} from "react-router-dom";
import {AppRoutes} from "@constants/routes";

const Header = (props) => {
  const {authorizationStatus} = props;
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <>
      <Logo/>

        <div className="user-block">
          {isAuthorized ?
            <div className="user-block__avatar">
              <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63"/>
            </div> :

            <Link to={AppRoutes.LOGIN} className="user-block__link">Sign in</Link>
          }
        </div>
    </>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.oneOf([AuthorizationStatus.AUTH, AuthorizationStatus.NO_AUTH]),
};

export default Header;
