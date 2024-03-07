import express, { Request, Response, query } from 'express';
import { SubmissionsData, Submission, FilterClauseType } from '../types/types';
import { applyFilters, handleError } from '../utils/utils';
import { getSubmissions } from '../services/apiService';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();
const apiKey = process.env.API_KEY || 'defaultApiKey';
router.get('/:formId/filteredResponses', async (req: Request, res: Response) => {
  const { formId } = req.params;
  const limit: number | undefined = req.query.limit ? parseInt(req.query.limit as string, 10) : undefined;
  const offset: number | undefined = req.query.offset ? parseInt(req.query.offset as string, 10) : undefined;
  const defaultLimit = 150;
  const defaultOffset = 0;

  let filters: FilterClauseType[] = [];
  const filtersParam = req.query.filters as string | undefined;

  if (filtersParam) {
    try {
      filters = JSON.parse(req.query.filters as string);
    } catch (error) {
      res.status(400).json({ error: 'Invalid JSON format for filters parameter.' });
      return;
    }
  }
  // TODO Should we tell users when limit or offset is invalid?
  const effectiveLimit: number = limit ? ((limit <= 0 || limit > defaultLimit) ? defaultLimit : limit) : defaultLimit;
  const effectiveOffset: number = offset ? ((offset < 0) ? defaultOffset : offset) : defaultOffset;

  const queryParams = { ...req.query };
  
  delete queryParams.filters;

  try {
    let responsesForPage: Submission[] = [];
    let onLastPage = false;
    let currentOffset = 0;
    // TODO thoughts:
    // 1. If filters are provided, iteratively call fillout API with the default limit until we reach the end. 
    // Because if we want "totalResponses" field, we must get everything from fillout API, then filter?
    // 2. If filters are not provided, fetch data directly.
    if (filters.length > 0) {
      do {
        const response = await getSubmissions(formId, apiKey, queryParams, defaultLimit, currentOffset);

        const submissionsData: SubmissionsData = response.data;
        const filteredSubmissions = submissionsData.responses.filter(submission =>
          applyFilters(submission, filters)
        );
        // Reach last page, 
        if (submissionsData.totalResponses < defaultLimit) onLastPage = true;
        // Add fetched submissions to result, and increment offset
        responsesForPage = responsesForPage.concat(filteredSubmissions);
        currentOffset += defaultLimit;

      } while (!onLastPage);

      const pageCount = Math.ceil(responsesForPage.length / effectiveLimit);
      res.json({
        responses: responsesForPage.slice(effectiveOffset, effectiveOffset + effectiveLimit),
        totalResponses: responsesForPage.length,
        pageCount
      });

    } else {
      // Fetch data directly without iteration, use returned total and pageCount
      const response = await getSubmissions(formId, apiKey, queryParams, effectiveLimit, effectiveOffset);

      const submissionsData: SubmissionsData = response.data;
      res.json(submissionsData);
    }
  } catch (error) {
    handleError(res, error);
  }
});

export default router;