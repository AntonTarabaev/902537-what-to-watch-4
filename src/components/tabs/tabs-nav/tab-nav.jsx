const TabNav = (props) => {
  const {title, number, activeTabId, tabTitleClickHandler} = props;

  const tabNavClickHandler = (evt) => {
    evt.preventDefault();
    tabTitleClickHandler(number);
  };

  return (
    <li
      className={`movie-nav__item ${activeTabId === number ? `movie-nav__item--active` : ``}`}
    >
      <a
        href={activeTabId === number ? null : `#`}
        className="movie-nav__link"
        onClick={tabNavClickHandler}
      >
        {title}
      </a>
    </li>
  );
};

TabNav.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  activeTabId: PropTypes.number.isRequired,
  tabTitleClickHandler: PropTypes.func.isRequired,
};

export default TabNav;
