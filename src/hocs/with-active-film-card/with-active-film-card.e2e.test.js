import withActiveFilmCard from "@root/hocs/with-active-film-card/with-active-film-card";
import {FILM_CARD_ACTIVATION_DELAY} from "@constants/main";

const MockComponent = () => <div/>;
const MockComponentWrapped = withActiveFilmCard(MockComponent);

it(`Should change active film card after timeout`, () => {
  const wrapper = shallow(<MockComponentWrapped/>);

  expect(wrapper.state().activeFilmCardId).toEqual(`-1`);
  expect(wrapper.state().filmCardActivationTimeout).toEqual(null);

  wrapper.props().onFilmCardMouseEnter(`5`);

  expect(wrapper.state().activeFilmCardId).toEqual(`-1`);
  setTimeout(() => {
    expect(wrapper.state().activeFilmCardId).toEqual(`5`);
    expect(wrapper.state().filmCardActivationTimeout).toEqual(null);
  }, FILM_CARD_ACTIVATION_DELAY);

  wrapper.props().onFilmCardMouseEnter(`15`);

  expect(wrapper.state().activeFilmCardId).toEqual(`-1`);
  setTimeout(() => {
    expect(wrapper.state().activeFilmCardId).toEqual(`15`);
    expect(wrapper.state().filmCardActivationTimeout).toEqual(null);

    wrapper.props().onFilmCardMouseLeave();
    expect(wrapper.state().activeFilmCardId).toEqual(`-1`);
  }, FILM_CARD_ACTIVATION_DELAY);

  wrapper.props().onFilmCardMouseEnter(`15`);
  wrapper.props().onFilmCardMouseLeave();
  expect(wrapper.state().activeFilmCardId).toEqual(`-1`);
  expect(wrapper.state().filmCardActivationTimeout).toEqual(null);
});
