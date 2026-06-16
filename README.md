# Serverless AWS TypeScript API

A professional, production-ready Serverless Framework template using Node.js, TypeScript, and AWS. This project implements a clean architecture (Hexagonal/DDD) to manage characters and integrates with the [DummyJSON API](https://dummyjson.com/).

## Features

- **Serverless Framework v4**: Optimized AWS infrastructure as code.
- **Node.js 24 & TypeScript**: Latest stable runtime and strong typing.
- **Validation**: Strict schema validation using [Valibot](https://valibot.dev/).
- **Performance**: Fast bundling with [esbuild](https://esbuild.github.io/).
- **Quality Control**: Linting and formatting with [Biome](https://biomejs.dev/).
- **DynamoDB Integration**: Persistent storage for character data.
- **Task Runner**: [Just](https://just.systems/) for streamlined development workflows.
- **Hurl Testing**: [Hurl](https://hurl.dev/) for testing.

## Tech Stack

- **Framework**: [Serverless Framework](https://serverless.com/)
- **Runtime**: Node.js 24.x
- **Language**: TypeScript
- **Database**: AWS DynamoDB
- **HTTP Client**: [Ky](https://github.com/sindresorhus/ky)
- **Middleware**: [Middy](https://middy.js.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## Prerequisites

- **Node.js**: `^24`
- **pnpm**: `^11`
- **AWS CLI**: Configured with appropriate credentials.
- **Serverless Framework**: `^4`
- **Just**: (Optional) For running task recipes.

## Installation & Deployment

### 1. Clone and Install
```bash
pnpm install
```

### 2. Configure Environment
Create a `.env` file or set environment variables for:
- `SWAPI_URL`: Base URL for the [DummyJSON API](https://dummyjson.com/).

### 3. Deploy to AWS
```bash
# Using Just (default to dev)
just deploy

# Or via Serverless directly
pnpm sls deploy --stage dev
```

## Task Runner (Justfile)

This project uses `just` to automate common tasks. Run `just --list` to see all available commands.

| Command                    | Description                                               |
| :------------------------- | :-------------------------------------------------------- |
| `just deploy [stage]`      | Deploy the service to the specified stage (default: dev). |
| `just remove [stage]`      | Remove the service from AWS.                              |
| `just info [stage]`        | View service information and endpoints.                   |
| `just logs [func] [stage]` | Tail logs for a specific function.                        |
| `just db-scan [stage]`     | Scan the DynamoDB table using AWS CLI.                    |
| `just check`               | Run Biome linting and formatting.                         |

## API Endpoints

Once deployed, you can test the API using the following endpoints. Replace `{{host}}` with your actual API Gateway URL in `tests.hurl` file.
