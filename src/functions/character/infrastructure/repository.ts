import {
  type DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
} from '@aws-sdk/lib-dynamodb'

import type { Character } from '../domain/entity'

export default class CharacterRepository {
  private tableName: string = process.env.CHARACTER_TABLE || ''

  constructor(private docClient: DynamoDBDocumentClient) {}

  async getAllCharacters(): Promise<Character[]> {
    const command = new ScanCommand({
      TableName: this.tableName,
    })
    const response = await this.docClient.send(command)
    return response.Items as Character[]
  }

  async createOneCharacter(character: Partial<Character>): Promise<Character> {
    const command = new PutCommand({
      TableName: this.tableName,
      Item: character,
    })
    const response = await this.docClient.send(command)
    return response.Attributes as Character
  }
}
