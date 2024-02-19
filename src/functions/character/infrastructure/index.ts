import CharacterRepository from './repository';
import { dynamoDBClient } from './dynamodb';

import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

const docClient = DynamoDBDocumentClient.from(dynamoDBClient());
const characterRepository = new CharacterRepository(docClient);

export default characterRepository;
