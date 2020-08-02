import Tabs from "@components/tabs/tabs";
import * as renderer from "react-test-renderer";
import {noop} from "@utils/common";

const PageTabs = [
  {
    id: `Overview`,
    component: <div>0</div>,
  },
  {
    id: `Details`,
    component: <div>1</div>,
  },
  {
    id: `Reviews`,
    component: <div>3</div>,
  },
];

describe(`FilmDetailsTabs component render correctly`, () => {
  it(`on first tab`, () => {
    const tree = renderer.create(
        <Tabs
          tabs={PageTabs}
          activeTabId={0}
          tabTitleClickHandler={noop}
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`on second tab`, () => {
    const component = renderer.create(
        <Tabs
          tabs={PageTabs}
          activeTabId={1}
          tabTitleClickHandler={noop}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`on third tab`, () => {
    const component = renderer.create(
        <Tabs
          tabs={PageTabs}
          activeTabId={2}
          tabTitleClickHandler={noop}
        />
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
