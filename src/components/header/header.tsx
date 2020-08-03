import Logo from "@components/logo/logo";
import {AuthorizationStatus, User} from "@root/types";
import {Link} from "react-router-dom";
import {AppRoutes} from "@constants/routes";

interface Props {
  authorizationStatus: AuthorizationStatus;
  userData: User;
}

const Header: React.FunctionComponent<Props> = (props: Props) => {
  const {authorizationStatus, userData} = props;
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  const avatarLink = userData && `https://4.react.pages.academy${userData.avatar}`;

  return (
    <>
      <Logo/>

        <div className="user-block">
          {isAuthorized ?
            <Link to={AppRoutes.MY_LIST}>
              <div className="user-block__avatar">
                <img src={avatarLink} alt="User avatar" width="63" height="63"/>
              </div>
            </Link> :

            <Link to={AppRoutes.LOGIN} className="user-block__link">Sign in</Link>
          }
        </div>
    </>
  );
};

export default Header;
