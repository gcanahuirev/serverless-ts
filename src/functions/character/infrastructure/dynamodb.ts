import { DynamoDBClient } from '@aws-sdk/client-dynamodb'

export const dynamoDBClient = (): DynamoDBClient => {
  return new DynamoDBClient()
}
