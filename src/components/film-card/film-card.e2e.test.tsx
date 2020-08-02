import FilmCard from "@components/film-card/film-card";
import {shallow} from "enzyme";
import {noop} from "@utils/common";
import {Film} from "@root/types";

const film: Film = {
  id: `573489`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  previewImage: `the-grand-budapest-hotel-poster.jpg`,
  bgImage: `path`,
  releaseYear: 1999,
  genre: `Drama`,
  rating: 8.2,
  ratingVotes: 197,
  director: `Some One`,
  duration: 123,
  description: `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
  actors: [
    `Robert Rodrigues`,
    `Takeshi Kitano`,
    `Michael Caine`,
    `Robert De Niro`,
    `Tom Hanks`,
  ],
  preview: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  video: `path`,
  isFavorite: true,
};

it(`When user hover film card listener gets film id`, () => {
  const onFilmCardMouseEnter = jest.fn();
  const filmCard = shallow(<FilmCard
    onFilmCardMouseEnter={onFilmCardMouseEnter}
    onFilmCardMouseLeave={noop}
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
