import { randomUUID } from 'node:crypto'
import * as v from 'valibot'

import { formatJSONResponse } from '@/libs/api-gateway'
import { middyfy } from '@/libs/lambda'

import { CreateOneCharacterSchema } from './schema'
import { CharacterService } from './service'

const characterService = new CharacterService()

export const health = middyfy(async () => {
  return formatJSONResponse({
    message: `Hello, welcome to the exciting Serverless world!`,
  })
})

export const getAllCharacters = middyfy(async () => {
  const data = await characterService.getAll()
  return formatJSONResponse({
    data,
  })
})

export const createOneCharacter = middyfy(async (event) => {
  if (!event.body) {
    throw new Error('Request body is required')
  }
  const input = v.safeParse(CreateOneCharacterSchema, event.body)

  if (!input.success) {
    throw new Error(JSON.stringify(input.issues))
  }
  const character = {
    characterId: randomUUID(),

    ...input.output,
  }

  const data = await characterService.createOne(character)

  return formatJSONResponse({ data }, 201)
})
