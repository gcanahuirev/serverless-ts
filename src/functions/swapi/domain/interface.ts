import { Person } from './entity';

export interface IPeopleService {
  getOne(id: number): Promise<Person>;
}
