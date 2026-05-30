import { formatJSONResponse } from '@/libs/api-gateway'
import { middyfy } from '@/libs/lambda'

import { PeopleService } from './service'

const peopleService = new PeopleService()

export const getPerson = middyfy(async (event) => {
  const id = Number(event.pathParameters?.id)

  if (Number.isNaN(id) || id <= 0) {
    throw new Error('Invalid id parameter')
  }

  const data = await peopleService.getOne(id)

  if (!data) {
    throw new Error('Person not found')
  }

  return formatJSONResponse({
    data,
  })
})
