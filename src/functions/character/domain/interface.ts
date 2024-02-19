import { Character } from './entity';

export interface ICharacterService {
  create(data: Partial<Character>): Promise<Character>;
  getAll(): Promise<Character[]>;
}
