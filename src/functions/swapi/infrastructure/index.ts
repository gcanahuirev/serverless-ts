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
    hooks: {
      beforeRequest: [
        (h) => {
          console.log('URL:', h.request.url)
          console.log('METHOD:', h.request.method)
        },
      ],
      afterResponse: [
        async (h) => {
          console.log('STATUS:', h.response.status)
          console.log('CONTENT-TYPE:', h.response.headers.get('content-type'))

          const text = await h.response.clone().text()

          console.log('BODY:', text.slice(0, 500))
        },
      ],
    },
  })
}
