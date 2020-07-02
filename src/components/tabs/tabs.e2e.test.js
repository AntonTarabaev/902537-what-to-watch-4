import Tabs from "@components/tabs/tabs";

const PageTabs = [
  {
    id: `Overview`,
    component: <div/>,
  },
  {
    id: `Details`,
    component: <div/>,
  },
  {
    id: `Reviews`,
    component: <div/>,
  },
];

it(`When user click on tab it become active`, () => {
  const filmPageTabs = mount(
      <Tabs
        tabs={PageTabs}
      />
  );

  const firstTab = filmPageTabs.find(`a.movie-nav__link`).at(0);
  const secondTab = filmPageTabs.find(`a.movie-nav__link`).at(1);
  const thirdTab = filmPageTabs.find(`a.movie-nav__link`).at(2);

  expect(filmPageTabs.state(`activeTabId`)).toEqual(0);

  secondTab.simulate(`click`);
  expect(filmPageTabs.state(`activeTabId`)).toEqual(1);

  thirdTab.simulate(`click`);
  expect(filmPageTabs.state(`activeTabId`)).toEqual(2);

  firstTab.simulate(`click`);
  expect(filmPageTabs.state(`activeTabId`)).toEqual(0);
});
