import { Response } from 'express';
import { Submission, FilterClauseType, Condition } from '../types/types';

export function applyFilters(submission: Submission, filters: FilterClauseType[]): boolean {
  return filters.every(filter => {
    const questionValue = submission.questions.find(q => q.id === filter.id)?.value;
    // what do we want to do with null value
    if (questionValue !== undefined && questionValue !== null) {
      switch (filter.condition) {
        case Condition.Equals:
          return questionValue === filter.value;
        case Condition.DoesNotEqual:
          return questionValue != filter.value;
        //TODO 1.if it's a DATE filter. compare dates? 2.If we have 2 user names 'alice' and 'Bob' do we care about upper cases?
        case Condition.GreaterThan:
          return questionValue > filter.value;
        case Condition.LessThan:
          return questionValue < filter.value;
        default:
          return false;
      }
    } else {
      return false;
    }
  });

}

export function handleError(res: Response, error: unknown) {
  console.log(error, 'in handleError');
  if (error instanceof Error) {
    console.error('Error getting responses', error.message);
  } else {
    console.error('Unknown error:', error);
  }
  res.status(500).json({ error: 'Internal Server Error' });
}