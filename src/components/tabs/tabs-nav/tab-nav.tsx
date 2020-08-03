interface Props {
  title: string;
  number: number;
  activeTabId: number;
  tabTitleClickHandler: (number: number) => void;
}

const TabNav: React.FunctionComponent<Props> = (props: Props) => {
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

export default React.memo(TabNav);
