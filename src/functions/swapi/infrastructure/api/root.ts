import type { IRoot } from '../interface'
import { swapi } from '..'

export async function getResources(): Promise<IRoot> {
  const data = await swapi().get('').json<IRoot>()
  return data
}
