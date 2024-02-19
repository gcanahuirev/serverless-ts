import {
  ScanCommand,
  PutCommand,
  DynamoDBDocumentClient,
} from '@aws-sdk/lib-dynamodb';

import { Character } from '../domain/entity';

export default class CharacterRepository {
  private Tablename: string = 'CharacterTable';

  constructor(private docClient: DynamoDBDocumentClient) {}

  async getAllCharacteres(): Promise<Character[]> {
    const command = new ScanCommand({
      TableName: this.Tablename,
    });
    const response = await this.docClient.send(command);
    return response.Items as Character[];
  }

  async createCharacter(character: Partial<Character>): Promise<Character> {
    const command = new PutCommand({
      TableName: this.Tablename,
      Item: character,
    });
    const response = await this.docClient.send(command);
    return response.Attributes as Character;
  }
}
