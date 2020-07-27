import withError from "@root/hocs/with-error/with-error";

const MockComponent = () => <div/>;
const MockComponentWrapped = withError(MockComponent);

it(`Should change isErrored`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  expect(wrapper.state().isErrored).toEqual(false);

  wrapper.props().toggleError(true);
  expect(wrapper.state().isErrored).toEqual(true);

  wrapper.props().toggleError(true);
  expect(wrapper.state().isErrored).toEqual(true);

  wrapper.props().toggleError(false);
  expect(wrapper.state().isErrored).toEqual(false);
});
