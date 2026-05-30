import type {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
  Handler,
} from 'aws-lambda'
import type { GenericSchema, InferInput } from 'valibot'

type ValidatedAPIGatewayProxyEvent<TSchema extends GenericSchema> = Omit<
  APIGatewayProxyEventV2,
  'body' | 'queryStringParameters'
> & {
  body: InferInput<TSchema>
  queryStringParameters: InferInput<TSchema>
}

export type ValidatedEventAPIGatewayProxyEvent<TSchema extends GenericSchema> =
  Handler<ValidatedAPIGatewayProxyEvent<TSchema>, APIGatewayProxyResultV2>

export const formatJSONResponse = (
  response: Record<string, unknown>,
  statusCode = 200,
): APIGatewayProxyResultV2 => {
  return {
    statusCode,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(response),
  }
}
