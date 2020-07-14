import TabNav from "@components/tabs/tabs-nav/tab-nav";

const TabInfo = {
  title: `Overview`,
  number: 0,
};

describe(`TabNav component render correctly`, () => {
  it(`with active tab`, () => {
    const tree = renderer.create(
        <TabNav
          title={TabInfo.title}
          number={TabInfo.number}
          activeTabId={TabInfo.number}
          tabTitleClickHandler={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`with not active tab`, () => {
    const tree = renderer.create(
        <TabNav
          title={TabInfo.title}
          number={TabInfo.number}
          activeTabId={TabInfo.number + 1}
          tabTitleClickHandler={() => {}}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
