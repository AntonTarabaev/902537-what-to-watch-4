import FilmCard from "@root/components/film-card/film-card";

const film = {
  title: `Bohemian Rhapsody`,
  poster: `bohemian-rhapsody.jpg`,
};

it(`When user hover film card listener gets film info`, () => {
  const onFilmCardHover = jest.fn();
  const filmCard = shallow(<FilmCard
    onFilmCardHover={onFilmCardHover}
    onHeaderClick={() => {}}
    film={film}
  />);

  filmCard.simulate(`mouseenter`);

  expect(onFilmCardHover).toHaveBeenCalledTimes(1);

  expect(onFilmCardHover.mock.calls[0][0]).toMatchObject(film);
});

it(`Should film card header be clicked`, () => {
  const onHeaderClick = jest.fn();

  const filmCard = shallow(<FilmCard
    onFilmCardHover={() => {}}
    onHeaderClick={onHeaderClick}
    film={film}
  />);

  const header = filmCard.find(`a.small-movie-card__link`);
  header.simulate(`click`);

  expect(onHeaderClick).toHaveBeenCalledTimes(1);
});
