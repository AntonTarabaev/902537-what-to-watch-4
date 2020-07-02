import FilmCard from "@components/film-card/film-card";

const film = {
  id: `13457894`,
  title: `Bohemian Rhapsody`,
  poster: `bohemian-rhapsody.jpg`,
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

it(`When user hover film card listener gets film id`, () => {
  const onFilmCardMouseEnter = jest.fn();
  const filmCard = shallow(<FilmCard
    onFilmCardMouseEnter={onFilmCardMouseEnter}
    onFilmCardMouseLeave={() => {}}
    onFilmCardElementClick={() => {}}
    isActive={false}
    film={film}
  />);

  filmCard.simulate(`mouseenter`);

  expect(onFilmCardMouseEnter).toHaveBeenCalledTimes(1);

  expect(onFilmCardMouseEnter.mock.calls[0][0]).toEqual(film.id);
});

it(`Should film card hover work properly`, () => {
  const onFilmCardMouseEnter = jest.fn();
  const onFilmCardMouseLeave = jest.fn();
  const filmCard = shallow(<FilmCard
    onFilmCardMouseEnter={onFilmCardMouseEnter}
    onFilmCardMouseLeave={onFilmCardMouseLeave}
    onFilmCardElementClick={() => {}}
    isActive={false}
    film={film}
  />);

  filmCard.simulate(`mouseenter`);
  filmCard.simulate(`mouseleave`);

  expect(onFilmCardMouseEnter).toHaveBeenCalledTimes(1);
  expect(onFilmCardMouseLeave).toHaveBeenCalledTimes(1);
});

it(`Should film card elements be clicked`, () => {
  const onFilmCardElementClick = jest.fn();

  const filmCard = shallow(<FilmCard
    onFilmCardMouseEnter={() => {}}
    onFilmCardMouseLeave={() => {}}
    onFilmCardElementClick={onFilmCardElementClick}
    isActive={false}
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
    onFilmCardMouseEnter={() => {}}
    onFilmCardMouseLeave={() => {}}
    onFilmCardElementClick={onFilmCardElementClick}
    isActive={false}
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
