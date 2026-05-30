import type { IPagination, IStarship } from '../interface'
import { swapi } from '..'

export async function getStarships(
  search?: string,
): Promise<IPagination<IStarship>> {
  const searchParams = new URLSearchParams()
  if (search) searchParams.set('search', search)

  const data = await swapi().get('starships').json<IPagination<IStarship>>()
  return data
}

export async function getStarship(id: number): Promise<IStarship> {
  const data = await swapi().get(`starships/${id}`).json<IStarship>()
  return data
}
