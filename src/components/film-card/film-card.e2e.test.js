import FilmCard from "@root/components/film-card/film-card";

const film = {
  title: `Bohemian Rhapsody`,
  poster: `bohemian-rhapsody.jpg`,
};

it(`When user hover film card listener gets film info`, () => {
  const onFilmCardHover = jest.fn();
  const filmCard = shallow(<FilmCard
    onFilmCardHover={onFilmCardHover}
    onFilmCardElementClick={() => {}}
    film={film}
  />);

  filmCard.simulate(`mouseenter`);

  expect(onFilmCardHover).toHaveBeenCalledTimes(1);

  expect(onFilmCardHover.mock.calls[0][0]).toMatchObject(film);
});

it(`Should film card elements be clicked`, () => {
  const onFilmCardElementClick = jest.fn();

  const filmCard = shallow(<FilmCard
    onFilmCardHover={() => {}}
    onFilmCardElementClick={onFilmCardElementClick}
    film={film}
  />);

  const header = filmCard.find(`a.small-movie-card__link`);
  const image = filmCard.find(`div.small-movie-card__image`);
  header.simulate(`click`, {preventDefault() {}});
  image.simulate(`click`);

  expect(onFilmCardElementClick).toHaveBeenCalledTimes(2);
});

it(`When user click film card header prevent link default behavior`, () => {
  const onFilmCardElementClick = jest.fn();

  const filmCard = shallow(<FilmCard
    onFilmCardHover={() => {}}
    onFilmCardElementClick={onFilmCardElementClick}
    film={film}
  />);

  const header = filmCard.find(`a.small-movie-card__link`);
  const linkDefaultBehaviorPrevention = jest.fn();
  header.simulate(`click`, {
    preventDefault: linkDefaultBehaviorPrevention,
  });

  expect(onFilmCardElementClick).toHaveBeenCalledTimes(1);
  expect(linkDefaultBehaviorPrevention).toHaveBeenCalledTimes(1);
});
