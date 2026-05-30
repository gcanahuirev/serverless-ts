import middy from '@middy/core'
import httpErrorHandler from '@middy/http-error-handler'
import httpHeaderNormalizer from '@middy/http-header-normalizer'
import httpJsonBodyParser from '@middy/http-json-body-parser'
import httpSecurityHeaders from '@middy/http-security-headers'
import type {
  APIGatewayProxyEventV2,
  APIGatewayProxyResultV2,
} from 'aws-lambda'

export const middyfy = (
  handler: (event: APIGatewayProxyEventV2) => Promise<APIGatewayProxyResultV2>,
) => {
  return middy<APIGatewayProxyEventV2, APIGatewayProxyResultV2>(handler)
    .use(
      httpHeaderNormalizer({ normalizeHeaderKey: (key) => key.toLowerCase() }),
    )
    .use(httpJsonBodyParser())
    .use(httpSecurityHeaders())
    .use(httpErrorHandler())
}
