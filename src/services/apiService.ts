import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export async function getSubmissions(formId: string, apiKey: string, queryParams: any, limit: number, offset: number): Promise<AxiosResponse> {
  try {
    if (limit < 0 || offset < 0) {
      throw new Error('Limit and offset must be non-negative values.');
    }

    const response = await axios.get(`https://api.fillout.com/v1/api/forms/${formId}/submissions`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
      params: { ...queryParams, limit, offset },
    });

    return response;
  } catch (error) {
    console.log(error, 'apiService err')
    throw new Error('Error fetching submissions');
  }
}