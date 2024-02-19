import ky from 'ky';

export const swapi = () => {
  return ky.create({
    prefixUrl: 'https://swapi.py4e.com/api/',
    retry: {
      limit: 5,
      methods: ['get', 'post', 'put'],
      backoffLimit: 3000,
    },
    throwHttpErrors: false,
  });
};
