import withActiveTab from "@root/hocs/with-active-tab/with-active-tab";
import {shallow} from "enzyme";

const MockComponent = () => <div/>;
const MockComponentWrapped = withActiveTab(MockComponent);

it(`Should change active tab`, () => {
  const wrapper = shallow(<MockComponentWrapped tabsId={`1`}/>);

  expect(wrapper.state().activeTabId).toEqual(0);

  wrapper.props().tabTitleClickHandler(2);
  expect(wrapper.state().activeTabId).toEqual(2);

  wrapper.props().tabTitleClickHandler(5);
  expect(wrapper.state().activeTabId).toEqual(5);
});
