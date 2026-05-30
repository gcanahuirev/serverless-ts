import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb'

import { dynamoDBClient } from './dynamodb'
import CharacterRepository from './repository'

const docClient = DynamoDBDocumentClient.from(dynamoDBClient())
const characterRepository = new CharacterRepository(docClient)

export default characterRepository
