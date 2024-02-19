import { swapi } from '..';
import { IFilm, IPagination } from '../interface';

export async function getFilms(search?: string): Promise<IPagination<IFilm>> {
  const searchParams = new URLSearchParams();
  if (search) searchParams.set('search', search);

  const data = await swapi().get('films').json<IPagination<IFilm>>();
  return data;
}

export async function getFilm(id: number): Promise<IFilm> {
  const data = await swapi().get(`films/${id}`).json<IFilm>();
  return data;
}
