import middy from '@middy/core';
import httpErrorHandler from '@middy/http-error-handler';
import httpHeaderNormalizer from '@middy/http-header-normalizer';
import jsonBodyParser from '@middy/http-json-body-parser';
import validator from '@middy/validator';
import { transpileSchema } from '@middy/validator/transpile';
import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from 'aws-lambda';

export const middyfy = (
  handler: (event: APIGatewayProxyEventV2) => Promise<APIGatewayProxyResultV2>,
  schema?: object,
) => {
  const middleware = middy<APIGatewayProxyEventV2, APIGatewayProxyResultV2>()
    .use(
      httpHeaderNormalizer({
        defaultHeaders: {
          'Content-type': 'application/json',
        },
      }),
    )
    .use(jsonBodyParser())
    .use(httpErrorHandler());

  if (schema)
    middleware.use(validator({ eventSchema: transpileSchema(schema) }));

  return middleware.handler(handler);
};
