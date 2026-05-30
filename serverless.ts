import type { AWS } from '@serverless/typescript'

import {
  health,
  getAllCharacters,
  createOneCharacter,
} from '@/functions/character/index'
import { getPerson } from '@/functions/swapi'

const serverlessConfiguration = {
  service: 'serverless-ts',
  frameworkVersion: '4',
  plugins: ['serverless-localstack'],
  dashboard: {
    disableMonitoring: false,
  },
  provider: {
    name: 'aws',
    runtime: 'nodejs24.x',
    httpApi: {
      cors: false,
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
  functions: { health, getAllCharacters, createOneCharacter, getPerson },
  package: { individually: true },
  build: {
    esbuild: {
      configFile: './esbuild.config.js',
    },
  },
  custom: {
    defaultStage: 'local',
    localstack: {
      stages: ['local'],
      networks: ['localstack-net'],
      docker: {
        compose_file: './docker/docker-compose.yml',
      },
    },
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
} satisfies AWS

export default serverlessConfiguration
