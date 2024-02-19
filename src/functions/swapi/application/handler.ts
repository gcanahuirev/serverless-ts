import { APIGatewayProxyResultV2 } from 'aws-lambda';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';
import { PeopleService } from './service';

const peopleService = new PeopleService();

export const getPerson = middyfy(
  async (event): Promise<APIGatewayProxyResultV2> => {
    try {
      const id = Number(event.pathParameters?.id) as number;
      if (!id) throw new Error('Not found id parameter');
      const data = await peopleService.getOne(id);
      return formatJSONResponse({
        data,
      });
    } catch (e) {
      return formatJSONResponse({
        status: 500,
        message: e,
      });
    }
  },
);
