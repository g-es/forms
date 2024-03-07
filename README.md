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
visit https://www.fillout.com/help/fillout-rest-api for more optional query params like ```limit, offset, sort``` 

Example Request
```
GET /cLZojxk94ous/filteredResponses?filters=%5B%7B%22id%22%3A%20%22nameId%22%2C%20%22condition%22%3A%20%22equals%22%2C%20%22value%22%3A%20%22Timmy%22%7D%2C%7B%22id%22%3A%20%22birthdayId%22%2C%20%22condition%22%3A%20%22greater_than%22%2C%20%22value%22%3A%20%222024-02-23T05%3A01%3A47.691Z%22%7D%5D
```
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
