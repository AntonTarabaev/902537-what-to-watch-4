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
    isActive={false}
    film={film}
  />);

  filmCard.simulate(`mouseenter`);
  filmCard.simulate(`mouseleave`);

  expect(onFilmCardMouseEnter).toHaveBeenCalledTimes(1);
  expect(onFilmCardMouseLeave).toHaveBeenCalledTimes(1);
});
