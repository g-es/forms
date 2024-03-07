import axios from 'axios';
import { SubmissionsData, QuestionType, Condition } from '../src/types/types';
import { getSubmissions } from '../src/services/apiService';
import dotenv from 'dotenv';

dotenv.config();

jest.mock('axios');

describe('Our API tests', () => {
  const sampleResponse: SubmissionsData = {
    responses: [
      {
        submissionId: "07e5d3d8-94c6-46a1-9793-e1f4c542b0ae",
        submissionTime: "2024-03-04T04:00:42.461Z",
        lastUpdatedAt: "2024-03-04T04:00:42.461Z",
        questions: [
          {
            id: "4KC356y4M6W8jHPKx9QfEy",
            name: "Anything else you'd like to share before your call?",
            type: QuestionType.LongAnswer,
            value: "Thank you!"
          },
          {
            id: "bE2Bo4cGUv49cjnqZ4UnkW",
            name: "What is your name?",
            type: QuestionType.ShortAnswer,
            value: "Dev"
          },
          {
            id: "dSRAe3hygqVwTpPK69p5td",
            name: "Please select a date to schedule your yearly check-in.",
            type: QuestionType.DatePicker,
            value: "2024-06-15"
          },
          {
            id: "fFnyxwWa3KV6nBdfBDCHEA",
            name: "How many employees work under you?",
            type: QuestionType.NumberInput,
            value: 0
          },
          {
            id: "jB2qDRcXQ8Pjo1kg3jre2J",
            name: "Which department do you work in?",
            type: QuestionType.MultipleChoice,
            value: "Engineering"
          },
          {
            id: "kc6S6ThWu3cT5PVZkwKUg4",
            name: "What is your email?",
            type: QuestionType.EmailInput,
            value: "dev@fillout.com"
          }
        ],
        calculations: [],
        urlParameters: [],
        quiz: {},
        documents: []
      }
    ],
    totalResponses: 1,
    pageCount: 1
  };
  const apiKey = process.env.API_KEY || 'defaultApiKey';

  it('should handle API call successfully', async () => {
    (axios.get as jest.Mock).mockResolvedValue(sampleResponse);

    // only 1 item has scheduled check in greater than 2024-04-08xxx
    const response = await getSubmissions('cLZojxk94ous', apiKey, {
      limit: '100',
      filters: '[{"id":"dSRAe3hygqVwTpPK69p5td","condition":"greater_than","value":"2024-04-08T05:01:47.691Z"}]'
    }, 150, 0);

    expect(response).toEqual(sampleResponse);
  });

  it('should handle API call failure', async () => {
    const formId = 'abc';
    const mockError = {
      response: {
        status: 500,
        data: {
          message: 'Internal Server Error',
        },
      },
    };
    (axios.get as jest.Mock).mockRejectedValue(mockError);
  
    try {
      await getSubmissions(formId, apiKey, {
        limit: '100',
        filters: '[{"id":"dSRAe3hygqVwTpPK69p5td","condition":"greater_than","value":"2024-04-08T05:01:47.691Z"}]'
      }, 150, 0);
      fail('Expected API call to fail with 500 Internal Server Error');
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect((error as Error).message).toEqual('Error fetching submissions');
    }
  });
});