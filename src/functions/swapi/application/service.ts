import type { IUserService } from '../domain/interface'
import { getPerson } from '../infrastructure/api'

export class UserService implements IUserService {
  async getOne(id: number) {
    return getPerson(id)
  }
}
