import { formatJSONResponse } from '@/libs/api-gateway'
import { middyfy } from '@/libs/lambda'

import { UserService } from './service'

const userService = new UserService()

export const getPerson = middyfy(async (event) => {
  const id = Number(event.pathParameters?.id)

  if (Number.isNaN(id) || id <= 0) {
    throw new Error('Invalid id parameter')
  }

  const data = await userService.getOne(id)

  return formatJSONResponse({ data })
})
