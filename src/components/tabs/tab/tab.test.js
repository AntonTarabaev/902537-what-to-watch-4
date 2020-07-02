import Tab from "@components/tabs/tab/tab";

const children = <div className="children-component" />;

it(`Tab component render correctly`, () => {
  const tree = renderer.create(
      <Tab
        isActive={true}
      >
        {children}
      </Tab>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
