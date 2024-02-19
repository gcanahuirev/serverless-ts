import { handlerPath } from '@libs/handler-resolver';

export const getPerson = {
  handler: `${handlerPath(__dirname)}/handler.getPerson`,
  events: [
    {
      http: {
        method: 'get',
        path: 'people/{id}',
      },
    },
  ],
};
