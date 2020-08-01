import TabNav from "@components/tabs/tabs-nav/tab-nav";

const Tabs = (props) => {
  const {tabs, activeTabId, tabTitleClickHandler} = props;
  const ActiveTab = tabs[activeTabId].component;

  return (
    <>
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((it, i) => {
            return (
              <TabNav
                key={`tab-${it.id}`}
                title={it.id}
                number={i}
                activeTabId={activeTabId}
                tabTitleClickHandler={tabTitleClickHandler}
              />
            );
          })}
        </ul>
      </nav>

      {ActiveTab}
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    component: PropTypes.node.isRequired,
  }).isRequired).isRequired,
  activeTabId: PropTypes.number.isRequired,
  tabTitleClickHandler: PropTypes.func.isRequired,
};

export default Tabs;
