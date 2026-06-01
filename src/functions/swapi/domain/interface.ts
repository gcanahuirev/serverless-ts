import type { User } from './entity'

export interface IUserService {
  getOne(id: number): Promise<User>
}
