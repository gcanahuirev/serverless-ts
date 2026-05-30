import type { Character, CreateOneCharacter } from '../application/schema'

export interface ICharacterService {
  createOne(data: CreateOneCharacter): Promise<Character>
  getAll(): Promise<Character[]>
}
