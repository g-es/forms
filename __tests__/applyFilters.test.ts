import { applyFilters } from '../src/utils/utils';
import { SubmissionsData, FilterClauseType, Condition } from '../src/types/types';
import { mockedSubmissionsData } from '../mocks/dummyData';

describe('applyFilters', () => {
  const sampleResponses: SubmissionsData = mockedSubmissionsData;

  it('should filter responses based on "equals" condition', () => {
    const filters: FilterClauseType[] = [
      { id: 'kc6S6ThWu3cT5PVZkwKUg4', condition: Condition.Equals, value: 'bob@gmail.com' },
    ];

    const filteredResponses = sampleResponses.responses.filter(response => applyFilters(response, filters));
    expect(filteredResponses).toHaveLength(1);

    const responseWithBob = filteredResponses[0];
    const nameQuestion = responseWithBob.questions.find(q => q.id === 'bE2Bo4cGUv49cjnqZ4UnkW');
    expect(nameQuestion?.value).toEqual('Bob');
  });

  it('should filter responses based on "does_not_equal" condition', () => {
    const filters: FilterClauseType[] = [
      { id: 'bE2Bo4cGUv49cjnqZ4UnkW', condition: Condition.DoesNotEqual, value: 'Alice' },
    ];
    const filteredResponses = sampleResponses.responses.filter(response => applyFilters(response, filters));
    expect(filteredResponses).toHaveLength(6); // 6 responses where name is not 'Alice'
  });
  
  it('should filter responses based on "less_than" condition', () => {
    const filters: FilterClauseType[] = [
      { id: 'fFnyxwWa3KV6nBdfBDCHEA', condition: Condition.LessThan, value: 3 },
    ];
    const filteredResponses = sampleResponses.responses.filter(response => applyFilters(response, filters));
    expect(filteredResponses).toHaveLength(2); // 2 responses where the number of employees is less than 3
  });

  
  it('should filter responses based on "greater_than" condition', () => {
    const filters: FilterClauseType[] = [
      { id: 'fFnyxwWa3KV6nBdfBDCHEA', condition: Condition.GreaterThan, value: 10 },
    ];

    const filteredResponses = sampleResponses.responses.filter(response => applyFilters(response, filters));
    expect(filteredResponses).toHaveLength(2); // 2 response where the number of employees is greater than 10
  });

  it('should filter responses based on multiple conditions (AND)', () => {
    const filters: FilterClauseType[] = [
      { id: 'bE2Bo4cGUv49cjnqZ4UnkW', condition: Condition.DoesNotEqual, value: 'Bob' },
      { id: 'fFnyxwWa3KV6nBdfBDCHEA', condition: Condition.GreaterThan, value: 1 },
    ];

    const filteredResponses = sampleResponses.responses.filter(response => applyFilters(response, filters));
    expect(filteredResponses).toHaveLength(4); // 4 responses where name is not Bob, and employees > 1
  });
});