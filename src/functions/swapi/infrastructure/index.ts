import ky from 'ky'

export const dummy = () => {
  return ky.create({
    prefix: process.env.SWAPI_URL || 'https://dummyjson.com',
    retry: {
      limit: 5,
      methods: ['get', 'post', 'put'],
      backoffLimit: 3000,
    },
    throwHttpErrors: true,
  })
}
