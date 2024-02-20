import type { AWS } from '@serverless/typescript';

import {
  health,
  getAllCharacters,
  createCharacter,
} from '@functions/character/index';
import { getPerson } from '@functions/swapi';

const serverlessConfiguration: AWS = {
  service: 'serverless-ts',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild', 'serverless-dynamodb', 'serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs20.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
    iam: {
      role: {
        statements: [
          {
            Effect: 'Allow',
            Action: [
              'dynamodb:DescribeTable',
              'dynamodb:Query',
              'dynamodb:Scan',
              'dynamodb:GetItem',
              'dynamodb:PutItem',
              'dynamodb:UpdateItem',
              'dynamodb:DeleteItem',
            ],
            Resource: 'arn:aws:dynamodb:us-east-1:*:table/CharacterTable',
          },
        ],
      },
    },
  },
  // import the function via paths
  functions: { health, getAllCharacters, createCharacter, getPerson },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node20',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
    dynamodb: {
      start: {
        port: 5000,
        inMemory: true,
        migrate: true,
      },
      stages: 'dev',
    },
    resources: {
      Resources: {
        CharacterTable: {
          Type: 'AWS::DynamoDB::Table',
          Properties: {
            TableName: 'CharacterTable',
            AttributeDefinitions: [
              {
                AttributeName: 'characterId',
                AttributeType: 'S',
              },
            ],
            KeySchema: [
              {
                AttributeName: 'characterId',
                KeyType: 'HASH',
              },
            ],
            ProvisionedThroughput: {
              ReadCapacityUnits: 1,
              WriteCapacityUnits: 1,
            },
          },
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
