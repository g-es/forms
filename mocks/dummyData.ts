import { SubmissionsData, QuestionType } from '../src/types/types';

const mockedSubmissionsData: SubmissionsData = {
  responses: [
    {
      questions: [
        { id: "4KC356y4M6W8jHPKx9QfEy", name: "Anything else you'd like to share before your call?", type: QuestionType.LongAnswer, value: "this is xx" },
        { id: "bE2Bo4cGUv49cjnqZ4UnkW", name: "What is your name?", type: QuestionType.ShortAnswer, value: "Bob" },
        { id: "dSRAe3hygqVwTpPK69p5td", name: "Please select a date to schedule your yearly check-in.", type: QuestionType.DatePicker, value: "2023-11-01" },
        { id: "fFnyxwWa3KV6nBdfBDCHEA", name: "How many employees work under you?", type: QuestionType.NumberInput, value: 1 },
        { id: "jB2qDRcXQ8Pjo1kg3jre2J", name: "Which department do you work in?", type: QuestionType.MultipleChoice, value: "Marketing" },
        { id: "kc6S6ThWu3cT5PVZkwKUg4", name: "What is your email?", type: QuestionType.EmailInput, value: "bob@gmail.com" }
      ],
      calculations: [],
      urlParameters: [],
      submissionId: 'submission1',
      submissionTime: '2023-03-01T08:00:00Z',
      lastUpdatedAt: '2023-03-01T08:30:00Z',
      documents: [],
    },
    {
      questions: [
        { id: "4KC356y4M6W8jHPKx9QfEy", name: "Anything else you'd like to share before your call?", type: QuestionType.LongAnswer, value: "do not call" },
        { id: "bE2Bo4cGUv49cjnqZ4UnkW", name: "What is your name?", type: QuestionType.ShortAnswer, value: "aasdf" },
        { id: "dSRAe3hygqVwTpPK69p5td", name: "Please select a date to schedule your yearly check-in.", type: QuestionType.DatePicker, value: "2023-05-02" },
        { id: "fFnyxwWa3KV6nBdfBDCHEA", name: "How many employees work under you?", type: QuestionType.NumberInput, value: 3 },
        { id: "jB2qDRcXQ8Pjo1kg3jre2J", name: "Which department do you work in?", type: QuestionType.MultipleChoice, value: "Recruiting" },
        { id: "kc6S6ThWu3cT5PVZkwKUg4", name: "What is your email?", type: QuestionType.EmailInput, value: "asdf@aol.com" }
      ],
      calculations: [],
      urlParameters: [],
      submissionId: 'submission2',
      submissionTime: '2023-03-06T08:00:00Z',
      lastUpdatedAt: '2023-03-06T08:30:00Z',
      documents: [],
    },
    {
      questions: [
        { id: "4KC356y4M6W8jHPKx9QfEy", name: "Anything else you'd like to share before your call?", type: QuestionType.LongAnswer, value: "asdf hjkl" },
        { id: "bE2Bo4cGUv49cjnqZ4UnkW", name: "What is your name?", type: QuestionType.ShortAnswer, value: "CCC" },
        { id: "dSRAe3hygqVwTpPK69p5td", name: "Please select a date to schedule your yearly check-in.", type: QuestionType.DatePicker, value: "2023-04-05" },
        { id: "fFnyxwWa3KV6nBdfBDCHEA", name: "How many employees work under you?", type: QuestionType.NumberInput, value: 5 },
        { id: "jB2qDRcXQ8Pjo1kg3jre2J", name: "Which department do you work in?", type: QuestionType.MultipleChoice, value: "Engineering" },
        { id: "kc6S6ThWu3cT5PVZkwKUg4", name: "What is your email?", type: QuestionType.EmailInput, value: "c@gmail.com" }
      ],
      calculations: [],
      urlParameters: [],
      submissionId: 'submission3',
      submissionTime: '2023-03-08T08:00:00Z',
      lastUpdatedAt: '2023-03-08T08:30:00Z',
      documents: [],
    },
    {
      questions: [
        { id: "4KC356y4M6W8jHPKx9QfEy", name: "Anything else you'd like to share before your call?", type: QuestionType.LongAnswer, value: null },
        { id: "bE2Bo4cGUv49cjnqZ4UnkW", name: "What is your name?", type: QuestionType.ShortAnswer, value: "Alice" },
        { id: "dSRAe3hygqVwTpPK69p5td", name: "Please select a date to schedule your yearly check-in.", type: QuestionType.DatePicker, value: "2023-12-22" },
        { id: "fFnyxwWa3KV6nBdfBDCHEA", name: "How many employees work under you?", type: QuestionType.NumberInput, value: null },
        { id: "jB2qDRcXQ8Pjo1kg3jre2J", name: "Which department do you work in?", type: QuestionType.MultipleChoice, value: "Recruiting" },
        { id: "kc6S6ThWu3cT5PVZkwKUg4", name: "What is your email?", type: QuestionType.EmailInput, value: "alice@x.com" }
      ],
      calculations: [],
      urlParameters: [],
      submissionId: 'submission4',
      submissionTime: '2023-03-09T08:00:00Z',
      lastUpdatedAt: '2023-03-09T08:30:00Z',
      documents: [],
    },
    {
      questions: [
        { id: "4KC356y4M6W8jHPKx9QfEy", name: "Anything else you'd like to share before your call?", type: QuestionType.LongAnswer, value: "hello hello" },
        { id: "bE2Bo4cGUv49cjnqZ4UnkW", name: "What is your name?", type: QuestionType.ShortAnswer, value: "Sad" },
        { id: "dSRAe3hygqVwTpPK69p5td", name: "Please select a date to schedule your yearly check-in.", type: QuestionType.DatePicker, value: "2023-01-21" },
        { id: "fFnyxwWa3KV6nBdfBDCHEA", name: "How many employees work under you?", type: QuestionType.NumberInput, value: 20 },
        { id: "jB2qDRcXQ8Pjo1kg3jre2J", name: "Which department do you work in?", type: QuestionType.MultipleChoice, value: "Operations" },
        { id: "kc6S6ThWu3cT5PVZkwKUg4", name: "What is your email?", type: QuestionType.EmailInput, value: null }
      ],
      calculations: [],
      urlParameters: [],
      submissionId: 'submission5',
      submissionTime: '2023-04-06T08:00:00Z',
      lastUpdatedAt: '2023-04-06T08:00:00Z',
      documents: [],
    },
    {
      questions: [
        { id: "4KC356y4M6W8jHPKx9QfEy", name: "Anything else you'd like to share before your call?", type: QuestionType.LongAnswer, value: "zxy" },
        { id: "bE2Bo4cGUv49cjnqZ4UnkW", name: "What is your name?", type: QuestionType.ShortAnswer, value: "Sydney" },
        { id: "dSRAe3hygqVwTpPK69p5td", name: "Please select a date to schedule your yearly check-in.", type: QuestionType.DatePicker, value: null },
        { id: "fFnyxwWa3KV6nBdfBDCHEA", name: "How many employees work under you?", type: QuestionType.NumberInput, value: 15 },
        { id: "jB2qDRcXQ8Pjo1kg3jre2J", name: "Which department do you work in?", type: QuestionType.MultipleChoice, value: "Recruiting" },
        { id: "kc6S6ThWu3cT5PVZkwKUg4", name: "What is your email?", type: QuestionType.EmailInput, value: "syd@mail.com" }
      ],
      calculations: [],
      urlParameters: [],
      submissionId: 'submission6',
      submissionTime: '2023-05-04T08:30:00Z',
      lastUpdatedAt: '2023-05-04T08:30:00Z',
      documents: [],
    },
    {
      questions: [
        { id: "4KC356y4M6W8jHPKx9QfEy", name: "Anything else you'd like to share before your call?", type: QuestionType.LongAnswer, value: null },
        { id: "bE2Bo4cGUv49cjnqZ4UnkW", name: "What is your name?", type: QuestionType.ShortAnswer, value: "Lin" },
        { id: "dSRAe3hygqVwTpPK69p5td", name: "Please select a date to schedule your yearly check-in.", type: QuestionType.DatePicker, value: "2023-01-03" },
        { id: "fFnyxwWa3KV6nBdfBDCHEA", name: "How many employees work under you?", type: QuestionType.NumberInput, value: 0 },
        { id: "jB2qDRcXQ8Pjo1kg3jre2J", name: "Which department do you work in?", type: QuestionType.MultipleChoice, value: "Recruiting" },
        { id: "kc6S6ThWu3cT5PVZkwKUg4", name: "What is your email?", type: QuestionType.EmailInput, value: "lin@gmail.com" }
      ],
      calculations: [],
      urlParameters: [],
      submissionId: 'submission7',
      submissionTime: '2023-09-03T09:10:00Z',
      lastUpdatedAt: '2023-09-06T08:30:00Z',
      documents: [],
    }
  ],
  totalResponses: 7,
  pageCount: 1,
};

export { mockedSubmissionsData };