import { swapi } from '..';
import { IPerson, IPagination } from '../interface';

export async function getPeople(
  search?: string,
): Promise<IPagination<IPerson>> {
  const searchParams = new URLSearchParams();
  if (search) searchParams.set('search', search);

  const data = await swapi()
    .get('people', { searchParams })
    .json<IPagination<IPerson>>();
  return data;
}

export async function getPerson(id: number): Promise<IPerson> {
  const data = await swapi().get(`people/${id}`).json<IPerson>();
  return data;
}
