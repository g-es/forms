# Retrieve Filtered Responses
## Configuration
Change .env.sample file to .env
Add your API key

```
  API_KEY=your_api_key
  PORT=3000
```

## Getting Started

```
npm install
npm start
```

## Test endpoint and filter

```
npm test
```

## Endpoint

```plaintext
GET /:formId/filteredResponses
```
Parameters
```formId (required)```: The public identifier of the form for which you want to retrieve filtered responses. This should be a string.

Query Parameters
```filters```: An array of filters to apply to the responses. Each filter should have the following structure:
visit https://www.fillout.com/help/fillout-rest-api for more optional query params like ```limit, offset, sort, afterDate``` 

Example Request

specify ```limit=100```, ```sort=ASC```, the ```filters``` field below indicates schedule date `greater than` '2024-03-29...'
```
GET /cLZojxk94ous/filteredResponses?limit=100&filters=%5B%7B%22id%22%3A%22dSRAe3hygqVwTpPK69p5td%22%2C%22condition%22%3A%22greater_than%22%2C%22value%22%3A%222024-03-29T05%3A01%3A47.691Z%22%7D%5D&sort=asc
```
or visit Railway app here https://forms-production.up.railway.app/cLZojxk94ous/filteredResponses?afterDate=2024-02-26T20%3A49%3A43.783Z&limit=2&offset=2&filters=%5B%7B%22id%22%3A%22dSRAe3hygqVwTpPK69p5td%22%2C%22condition%22%3A%22greater_than%22%2C%22value%22%3A%222024-02-02T05%3A01%3A47.691Z%22%7D%5D&=


Example Response
```
{
  "responses": [
    {
      "questions": [
        {
          "id": "nameId",
          "name": "What's your name?",
          "type": "ShortAnswer",
          "value": "Timmy"
        },
        {
          "id": "birthdayId",
          "name": "What is your birthday?",
          "type": "DatePicker",
          "value": "2024-02-22T05:01:47.691Z"
        }
      ],
      "submissionId": "abc",
      "submissionTime": "2024-05-16T23:20:05.324Z",
      ...
    },
  ],
  "totalResponses": 1,
  "pageCount": 1
}
```
Response Status Codes
```
200 OK Successfully retrieved filtered responses.
400 Bad Request
500 Internal Server Error
```
