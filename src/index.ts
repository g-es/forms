import * as dotenv from "dotenv";
import express, { Request, Response, query } from 'express';
import axios from 'axios';
import {
  SubmissionsData,
  Filter,
} from './types';
dotenv.config();

const apiKey = process.env.API_KEY || 'defaultApiKey';
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

const app = express();
app.use(express.json());

app.get('/:formId/filteredResponses', async (req: Request, res: Response) => {

  const { formId } = req.params;

  const limit: number | undefined = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined;
  const offset: number | undefined = req.query.offset ? parseInt(req.query.offset as string, 10) : undefined;

  let filters: Filter[] = [];
  const filtersParam = req.query.filters as string | undefined;
  // is filters required?
  if (filtersParam) {
    try {
      filters = JSON.parse(req.query.filters as string);
    } catch (error) {
      res.status(400).json({ error: 'Invalid JSON format for filters parameter.' });
      return;
    }
  }
  const queryParams = { ...req.query };
  delete queryParams.filters;

  try {
    // see comment on line 81, fetch responses without them, then use them to slice the result
    delete queryParams.limit;
    delete queryParams.offset;
    
    console.log('whats in param', queryParams);
    const response = await axios.get(`https://api.fillout.com/v1/api/forms/${formId}/submissions`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
      params: queryParams,
    });

    const submissionsData: SubmissionsData = response.data;
    const filteredSubmissions = submissionsData.responses.filter(submission => {
      return filters.every(filter => {
        const questionValue = submission.questions.find(q => q.id === filter.id)?.value;
        if (questionValue) {
          switch (filter.condition) {
            case 'equals':
              return questionValue == filter.value;
            case 'does_not_equal':
              return questionValue != filter.value;
            case 'greater_than':
              return questionValue > filter.value;
            case 'less_than':
              return questionValue < filter.value;
            default:
              return false;
          }
        } else {
          return false;
        }
      });
    });

    let responsesForPage;
    // TODO not sure if I understand it right. I'm fetching responses without using limit offset, then slice the result based on them
    if (offset && limit) {
      const startIndex = offset;
      const endIndex = startIndex + limit;
      responsesForPage = filteredSubmissions.slice(startIndex, endIndex);
    } else if (limit !== undefined) {
      responsesForPage = filteredSubmissions.slice(0, limit);
    } else if (offset !== undefined) {
      responsesForPage = filteredSubmissions.slice(offset);
    } else {
      responsesForPage = filteredSubmissions;
    }

    const pageCount = limit !== undefined ? Math.ceil(filteredSubmissions.length / limit) : 1;
    res.json({
      responses: responsesForPage,
      totalResponses: filteredSubmissions.length,
      pageCount
    });
  } catch (error) {
    handleError(res, error);
  }
});

function handleError(res: Response, error: unknown) {
  if (error instanceof Error) {
    console.error('Error getting responses', error.message);
  } else {
    console.error('Unknown error:', error);
  }
  res.status(500).json({ error: 'Internal Server Error' });
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});