# Demo Serverless Typescript

This project has been generated using the `AWS / Node.js / HTTP API` template from the [Serverless framework](https://www.serverless.com/). For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/getting-started).

## Requirements

- Pnpm >= 11
- Nodejs >= 24
- Aws cli >= 2
- Serverless >= 4
- Just runner (Optional)
- Curl or any http client (Optional)

## Installation/deployment instructions

- Run `pnpm install` to install the project dependencies
- List available recipes in justfile with `just --list`
- Run `sls deploy` to deploy this stack to AWS
- If you remove all services, run `sls remove --stage dev`

## Test your service

This demo contains 4 lambda functions each activated by an HTTP request made on the API Gateway V2 REST API path. The request body must be provided as `application/json`.

### Remotely

Copy and replace your `url` - found in Serverless `deploy` command output - and `name` parameter in the following `curl` command in your terminal or in Postman to test your newly deployed application.

- Get healthcheck status of endpoint

```sh
curl https://{{PATH}}/character/health
```

- Get data from a user by id (dummyjson)

```sh
curl https://{{PATH}}/people/1
```

- List of characters

```sh
curl https://{{PATH}}/character
```

- Create a new character

```sh
curl -X POST "https://{{PATH}}/character" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Obi-Wan Kenobi",
    "gender": "male",
    "url": "https://dummyjson.com/"
  }'
```

## References
- [AWS Lambda Build Configuration](https://www.serverless.com/framework/docs/providers/aws/guide/building)
- [Upgrading to Serverless Framework V4](https://www.serverless.com/framework/docs/guides/upgrading-v4)
- [Node.js middleware engine for AWS Lambda](https://middy.js.org/)
