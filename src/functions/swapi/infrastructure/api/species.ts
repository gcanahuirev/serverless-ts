import type { IPagination, ISpecie } from '../interface'
import { swapi } from '..'

export async function getSpecies(
  search?: string,
): Promise<IPagination<ISpecie>> {
  const searchParams = new URLSearchParams()
  if (search) searchParams.set('search', search)

  const data = await swapi()
    .get('species', { searchParams })
    .json<IPagination<ISpecie>>()
  return data
}

export async function getSpecie(id: number): Promise<ISpecie> {
  const data = await swapi().get(`species/${id}`).json<ISpecie>()
  return data
}
