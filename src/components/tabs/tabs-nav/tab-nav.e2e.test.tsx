import TabNav from "@components/tabs/tabs-nav/tab-nav";
import {shallow} from "enzyme";
import {noop} from "@utils/common";

const TabInfo = {
  title: `Overview`,
  number: 0,
};

const mockEvent = {
  preventDefault: noop,
};

it(`Should tab nav title click handler work properly`, () => {
  const tabTitleClickHandler = jest.fn();

  const tabNav = shallow(
      <TabNav
        title={TabInfo.title}
        number={TabInfo.number}
        activeTabId={TabInfo.number}
        tabTitleClickHandler={tabTitleClickHandler}
      />
  );

  const title = tabNav.find(`a.movie-nav__link`);
  title.simulate(`click`, mockEvent);

  expect(tabTitleClickHandler).toHaveBeenCalledTimes(1);
  expect(tabTitleClickHandler.mock.calls[0][0]).toEqual(TabInfo.number);
});

it(`When user click tab nav title prevent link default behavior`, () => {
  const tabTitleClickHandler = jest.fn();

  const tabNav = shallow(
      <TabNav
        title={TabInfo.title}
        number={TabInfo.number}
        activeTabId={TabInfo.number}
        tabTitleClickHandler={tabTitleClickHandler}
      />
  );

  const title = tabNav.find(`a.movie-nav__link`);
  const linkDefaultBehaviorPrevention = jest.fn();
  title.simulate(`click`, {
    preventDefault: linkDefaultBehaviorPrevention,
  });

  expect(tabTitleClickHandler).toHaveBeenCalledTimes(1);
  expect(linkDefaultBehaviorPrevention).toHaveBeenCalledTimes(1);
});
