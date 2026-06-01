import type { IUser } from '../interface'
import { dummy } from '..'

export async function getPerson(id: number): Promise<IUser> {
  const data = await dummy().get(`users/${id}`).json<IUser>()
  return data
}
