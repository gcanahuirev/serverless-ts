import { Character } from '../domain/entity';
import { ICharacterService } from '../domain/interface';
import characterRepository from '../infrastructure';

export class CharacterService implements ICharacterService {
  async create(data: Partial<Character>): Promise<Character> {
    const response = await characterRepository.createCharacter(data);
    return response;
  }

  async getAll(): Promise<Character[]> {
    const response = await characterRepository.getAllCharacteres();
    return response;
  }
}
