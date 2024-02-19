import { swapi } from '..';
import { IRoot } from '../interface';

export async function getResources(): Promise<IRoot> {
  const data = await swapi().get('').json<IRoot>();
  return data;
}
