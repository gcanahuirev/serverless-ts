# Demo Serverless Typescript

This project has been generated using the `aws-nodejs-typescript` template from the [Serverless framework](https://www.serverless.com/). For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Requirements

- Nodejs >= 20.10
- Pnpm >= 8.14
- Serverless >= 3.38
- Aws account
- Curl

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

- Run `pnpm i` to install the project dependencies
- Run `sls deploy` to deploy this stack to AWS
- If you remove all services, run `serverless remove --stage dev`

## Test your service

This demo contains 4 lambda functions each activated by an HTTP request made on the API Gateway REST API path. The request body must be provided as `application/json`. API Gateway tests the structure of the body against `file.json`.

### Remotely

Copy and replace your `url` - found in Serverless `deploy` command output - and `name` parameter in the following `curl` command in your terminal or in Postman to test your newly deployed application.

Verificar estado general

- GET https://us-east-1.amazonaws.com/dev/character/health

```sh
curl https://{{PATH}}/dev/character/health
```

Obtener una persona por id (SWAPI)

- GET https://us-east-1.amazonaws.com/dev/people/1

```sh
curl https://{{PATH}}/dev/people/1
```

Lista de personajes

- GET https://us-east-1.amazonaws.com/dev/character

```sh
curl https://{{PATH}}/dev/character
```

Crear un personaje

- POST https://us-east-1.amazonaws.com/dev/character

```sh
curl -X POST https://{{PATH}}/dev/character -H "Content-Type: application/json" -d '{ "name": "Obi-Wan Kenobi", "gender": "male", "url": "https://swapi.py4e.com/api/people/10/" }'
```

## Advanced usage

Any tsconfig.json can be used, but if you do, set the environment variable `TS_NODE_CONFIG` for building the application, eg `TS_NODE_CONFIG=./tsconfig.app.json npx serverless webpack`

## References
- [Opmitize serverless project](https://www.thisdot.co/blog/how-to-configure-and-optimize-a-new-serverless-framework-project-with)
- [Serverless typescript template](https://github.com/icode247/aws-serverless-typescript-api)
