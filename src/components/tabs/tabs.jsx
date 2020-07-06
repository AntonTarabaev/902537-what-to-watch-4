class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTabId: 0,
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        activeTabId: 0,
      });
    }
  }

  render() {
    const {activeTabId} = this.state;
    const {tabs} = this.props;

    const ActiveTab = tabs[activeTabId].component;

    return (
      <>
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            {tabs.map((it, i) => {
              return (
                <li
                  key={`tab-${it.id}`}
                  className={`movie-nav__item ${activeTabId === i ? `movie-nav__item--active` : ``}`}
                >
                  <a
                    href={activeTabId === i ? null : `#`}
                    className="movie-nav__link"
                    onClick={(evt) => {
                      evt.preventDefault();
                      this.setState({
                        activeTabId: i,
                      });
                    }}
                  >
                    {it.id}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {ActiveTab}
      </>
    );
  }
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
  }).isRequired).isRequired,
};

export default Tabs;
