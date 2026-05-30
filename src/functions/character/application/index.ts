export const health = {
  handler: 'src/functions/character/application/handler.health',
  events: [
    {
      httpApi: {
        method: 'GET',
        path: 'character/health',
      },
    },
  ],
}

export const createOneCharacter = {
  handler: 'src/functions/character/application/handler.createOneCharacter',
  events: [
    {
      httpApi: {
        method: 'POST',
        path: 'character',
      },
    },
  ],
}

export const getAllCharacters = {
  handler: 'src/functions/character/application/handler.getAllCharacters',
  events: [
    {
      httpApi: {
        method: 'GET',
        path: 'character',
      },
    },
  ],
}
