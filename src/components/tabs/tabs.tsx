import TabNav from "@components/tabs/tabs-nav/tab-nav";

interface Props {
  tabs: {id: string; component: React.ReactNode}[];
  activeTabId: number;
  tabTitleClickHandler: () => void;
}

const Tabs: React.FunctionComponent<Props> = (props: Props) => {
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

export default Tabs;
