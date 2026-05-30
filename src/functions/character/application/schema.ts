import * as v from 'valibot'

export const CharacterSchema = v.object({
  characterId: v.pipe(v.string(), v.uuid()),
  name: v.pipe(v.string(), v.minLength(1)),
  gender: v.pipe(v.string(), v.minLength(1)),
  url: v.pipe(v.string(), v.url()),
})

export const CreateOneCharacterSchema = v.omit(CharacterSchema, ['characterId'])

export type Character = v.InferInput<typeof CharacterSchema>
export type CreateOneCharacter = v.InferInput<typeof CreateOneCharacterSchema>
