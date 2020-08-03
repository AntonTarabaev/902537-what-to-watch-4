import withValidation from "@root/hocs/with-validation/with-validation";
import {shallow} from "enzyme";

const MockComponent = () => <div/>;
const MockComponentWrapped = withValidation(MockComponent);

describe(`withValidation work properly`, () => {
  it(`should get correct state`, () => {
    const wrapper = shallow(<MockComponentWrapped/>);

    expect(wrapper.state().emailIsValid).toEqual(true);
    expect(wrapper.state().passwordIsValid).toEqual(true);
  });

  it(`should correctly validate password`, () => {
    const wrapper = shallow(<MockComponentWrapped/>);

    wrapper.props().validateData(``, 123);
    expect(wrapper.state().passwordIsValid).toEqual(false);

    wrapper.props().validateData(``, ``);
    expect(wrapper.state().passwordIsValid).toEqual(false);

    wrapper.props().validateData(``, `a`);
    expect(wrapper.state().passwordIsValid).toEqual(true);

    wrapper.props().validateData(``, `fasdfsda788rkfdj`);
    expect(wrapper.state().passwordIsValid).toEqual(true);
  });

  it(`should correctly validate email`, () => {
    const wrapper = shallow(<MockComponentWrapped/>);

    wrapper.props().validateData(`ewqe`, ``);
    expect(wrapper.state().emailIsValid).toEqual(false);

    wrapper.props().validateData(`12312`, ``);
    expect(wrapper.state().emailIsValid).toEqual(false);

    wrapper.props().validateData(3421412, ``);
    expect(wrapper.state().emailIsValid).toEqual(false);

    wrapper.props().validateData(`aaaa@`, ``);
    expect(wrapper.state().emailIsValid).toEqual(false);

    wrapper.props().validateData(`@aaaa.ru`, ``);
    expect(wrapper.state().emailIsValid).toEqual(false);

    wrapper.props().validateData(`mail.ru`, ``);
    expect(wrapper.state().emailIsValid).toEqual(false);

    wrapper.props().validateData(`mail@.ru`, ``);
    expect(wrapper.state().emailIsValid).toEqual(false);

    wrapper.props().validateData(`somebody@gmail.com`, ``);
    expect(wrapper.state().emailIsValid).toEqual(true);

    wrapper.props().validateData(`stranger@ya.ru`, ``);
    expect(wrapper.state().emailIsValid).toEqual(true);
  });
});
