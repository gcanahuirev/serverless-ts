import { handlerPath } from '@libs/handler-resolver';
import { characterSchema } from './schema';

export const health = {
  handler: `${handlerPath(__dirname)}/handler.health`,
  events: [
    {
      http: {
        method: 'get',
        path: 'character/health',
      },
    },
  ],
};

export const createCharacter = {
  handler: `${handlerPath(__dirname)}/handler.createCharacter`,
  events: [
    {
      http: {
        method: 'post',
        path: 'character',
        request: {
          schemas: {
            'application/json': characterSchema,
          },
        },
      },
    },
  ],
};

export const getAllCharacters = {
  handler: `${handlerPath(__dirname)}/handler.getAllCharacters`,
  events: [
    {
      http: {
        method: 'get',
        path: 'character',
      },
    },
  ],
};
