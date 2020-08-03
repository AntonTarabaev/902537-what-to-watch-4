import TabNav from "@components/tabs/tabs-nav/tab-nav";
import * as renderer from "react-test-renderer";
import {noop} from "@utils/common";

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
          tabTitleClickHandler={noop}
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
          tabTitleClickHandler={noop}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
