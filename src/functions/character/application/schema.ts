export const characterSchema = {
  type: 'object',
  required: ['name', 'gender', 'url'],
  properties: {
    name: { type: 'string' },
    gender: { type: 'string' },
    url: { type: 'string' },
  },
};
