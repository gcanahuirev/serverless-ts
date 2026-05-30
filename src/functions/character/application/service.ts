import type { ICharacterService } from '../domain/interface'
import characterRepository from '../infrastructure'
import type { Character, CreateOneCharacter } from './schema'

export class CharacterService implements ICharacterService {
  async createOne(data: CreateOneCharacter): Promise<Character> {
    const response = await characterRepository.createOneCharacter(data)
    return response
  }

  async getAll(): Promise<Character[]> {
    const response = await characterRepository.getAllCharacters()
    return response
  }
}
