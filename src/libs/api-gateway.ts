import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from 'aws-lambda';
import type { FromSchema, JSONSchema7Extension } from 'json-schema-to-ts';

type ValidatedAPIGatewayProxyEvent<S extends JSONSchema7Extension> = Omit<
  APIGatewayProxyEvent,
  'body' | 'queryStringParameters'
> & {
  body: FromSchema<S>;
} & { queryStringParameters: FromSchema<S> };
export type ValidatedEventAPIGatewayProxyEvent<S extends JSONSchema7Extension> =
  Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>;

export const formatJSONResponse = (response: Record<string, unknown>) => {
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
