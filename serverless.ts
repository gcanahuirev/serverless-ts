import type { AWS } from '@serverless/typescript'

import {
  health,
  getAllCharacters,
  createCharacter,
} from '@/functions/character/index'
import { getPerson } from '@/functions/swapi'

const serverlessConfiguration: AWS = {
  service: 'serverless-ts',
  frameworkVersion: '4',
  plugins: ['serverless-esbuild', 'serverless-localstack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs24.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
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
  package: { individually: false },
  custom: {
    defaultStage: 'local',
    localstack: {
      stages: ['local'],
      networks: ['localstack-net'],
      docker: {
        compose_file: './docker/docker-compose.yml',
      },
    },
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: false,
      exclude: ['aws-sdk/*'],
      target: 'node24',
      platform: 'node',
      packager: 'pnpm',
      concurrency: 5,
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
}

module.exports = serverlessConfiguration
