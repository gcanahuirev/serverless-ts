# 1. Health Check
GET {{host}}/character/health
HTTP 200
[Asserts]
jsonpath "$.status" == "ok"

# 2. List All Characters
GET {{host}}/character
HTTP 200
[Asserts]
jsonpath "$.data" isCollection

# 3. Create a New Character
POST {{host}}/character
Content-Type: application/json
{
  "gender": "female",
  "name": "Alice Smith",
  "url": "https://zed.dev/"
}
HTTP 201

# 4. Get Person from External API (DummyJSON)
GET {{host}}/people/6
HTTP 200
[Asserts]
jsonpath "$.data.id" exists
