import { swapi } from '..';
import { IPagination, IPlanet } from '../interface';

export async function getPlanets(
  search?: string,
): Promise<IPagination<IPlanet>> {
  const searchParams = new URLSearchParams();
  if (search) searchParams.set('search', search);

  const data = await swapi().get('planets').json<IPagination<IPlanet>>();
  return data;
}

export async function getPlanet(id: number): Promise<IPlanet> {
  const data = await swapi().get(`planets/${id}`).json<IPlanet>();
  return data;
}
