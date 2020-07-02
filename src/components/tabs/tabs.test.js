import Tabs from "@components/tabs/tabs";

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
        />
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`on second tab`, () => {
    const component = renderer.create(
        <Tabs
          tabs={PageTabs}
        />
    );

    component.root.findAllByProps({className: `movie-nav__link`})[1].props.onClick({preventDefault: () => {}});

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`on third tab`, () => {
    const component = renderer.create(
        <Tabs
          tabs={PageTabs}
        />
    );

    component.root.findAllByProps({className: `movie-nav__link`})[2].props.onClick({preventDefault: () => {}});

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
