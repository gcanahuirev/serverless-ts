import { DynamoDBClient } from '@aws-sdk/client-dynamodb';

export const dynamoDBClient = (): DynamoDBClient => {
  if (process.env.IS_OFFLINE) {
    return new DynamoDBClient({
      region: 'localhost',
      endpoint: 'http://localhost:5000',
      credentials: {
        accessKeyId: 'MockAccessKeyId',
        secretAccessKey: 'MockSecretAccessKey',
      },
    });
  }
  return new DynamoDBClient();
};
