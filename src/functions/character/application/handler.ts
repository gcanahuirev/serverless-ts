import { APIGatewayProxyResultV2 } from 'aws-lambda';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { randomUUID } from 'crypto';
// import { characterSchema } from './schema';
import { CharacterService } from './service';
import { Character } from '../domain/entity';

const characterService = new CharacterService();

export const health = middyfy(
  async (event): Promise<APIGatewayProxyResultV2> => {
    return formatJSONResponse({
      message: `Hello, welcome to the exciting Serverless world!`,
      event,
    });
  },
);

export const getAllCharacters = middyfy(
  async (): Promise<APIGatewayProxyResultV2> => {
    const data = await characterService.getAll();
    return formatJSONResponse({
      data,
    });
  },
);

export const createCharacter = middyfy(
  async (event): Promise<APIGatewayProxyResultV2> => {
    try {
      const input = event.body as Partial<Character>;
      const character: Character = {
        characterId: randomUUID(),
        name: input.name ?? 'N/A',
        gender: input.gender ?? 'N/A',
        url: input.url ?? 'N/A',
      };
      console.log(character);
      const data = await characterService.create({
        ...character,
      });
      return formatJSONResponse({
        data,
      });
    } catch (e) {
      console.log(e);
      return formatJSONResponse({
        status: 500,
        message: e,
      });
    }
  },
);
