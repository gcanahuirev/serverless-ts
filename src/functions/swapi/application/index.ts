export const getPerson = {
  handler: 'src/functions/swapi/application/handler.getPerson',
  events: [
    {
      httpApi: {
        method: 'GET',
        path: '/people/{id}',
      },
    },
  ],
}
