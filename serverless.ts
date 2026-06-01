import type { AWS } from '@serverless/typescript'

import {
  createOneCharacter,
  getAllCharacters,
  health,
} from '@/functions/character/index'
import { getPerson } from '@/functions/swapi'

const serverlessConfiguration = {
  app: 'serverless-lab',
  service: 'sls-ts',
  frameworkVersion: '4',
  package: { individually: true },
  stages: {
    dev: {
      observability: false,
    },
    prod: {
      observability: true,
    },
    default: {
      observability: false,
    },
  },
  dashboard: {
    disableMonitoring: true,
  },
  provider: {
    name: 'aws',
    region: 'us-east-1',
    stage: '${opt:stage, "dev"}',
    stackName: '${self:service}-${sls:stage}',
    deploymentPrefix: '${self:service}-${sls:stage}',
    runtime: 'nodejs24.x',
    httpApi: {
      cors: false,
    },
    environment: {
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      CHARACTER_TABLE: '${self:service}-${sls:stage}-character',
      SWAPI_URL: '${env:SWAPI_URL}',
    },
    stackTags: {
      Project: '${self:service}',
      Environment: '${sls:stage}',
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
            Resource: {
              'Fn::GetAtt': ['CharacterTable', 'Arn'],
            },
          },
        ],
      },
    },
  },
  functions: { health, getAllCharacters, createOneCharacter, getPerson },
  build: {
    esbuild: {
      configFile: './esbuild.config.js',
    },
  },
  resources: {
    Resources: {
      CharacterTable: {
        Type: 'AWS::DynamoDB::Table',
        Properties: {
          TableName: '${self:service}-${sls:stage}-character',
          BillingMode: 'PAY_PER_REQUEST',
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
          Tags: [
            { Key: 'Project', Value: '${self:service}' },
            { Key: 'Environment', Value: '${sls:stage}' },
          ],
        },
      },
    },
  },
} satisfies AWS

export default serverlessConfiguration
