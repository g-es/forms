type QuestionType =
  | 'Address'
  | 'AudioRecording'
  | 'Calcom'
  | 'Calendly'
  | 'Captcha'
  | 'Checkbox'
  | 'Checkboxes'
  | 'ColorPicker'
  | 'CurrencyInput'
  | 'DatePicker'
  | 'DateRange'
  | 'DateTimePicker'
  | 'Dropdown'
  | 'EmailInput'
  | 'FileUpload'
  | 'ImagePicker'
  | 'LocationCoordinates'
  | 'LongAnswer'
  | 'Matrix'
  | 'MultiSelect'
  | 'MultipleChoice'
  | 'NumberInput'
  | 'OpinionScale'
  | 'Password'
  | 'Payment'
  | 'PhoneNumber'
  | 'Ranking'
  | 'RecordPicker'
  | 'ShortAnswer'
  | 'Signature'
  | 'Slider'
  | 'StarRating'
  | 'Switch'
  | 'TimePicker'
  | 'URLInput';

type CalculationType = 'number' | 'text';
type Condition = 'equals' | 'does_not_equal' | 'greater_than' | 'less_than';

interface Question {
  id: string;
  name: string;
  type: QuestionType;
  value: string;
}

interface Calculation {
  id: string;
  name: string;
  type: CalculationType;
  value: number | string;
}

interface UrlParameter {
  id: string;
  name: string;
  value: string;
}

interface Quiz {
  score: number;
  maxScore: number;
}

interface Submission {
  questions: Question[];
  calculations: Calculation[];
  urlParameters: UrlParameter[];
  quiz?: Quiz;
  submissionId: string;
  submissionTime: string;
  lastUpdatedAt: string;
  documents: string[]; // is it string
  editLink?: string;
}

interface SubmissionsData {
  responses: Submission[];
}

interface Filter {
  id: string;
  condition: Condition;
  value: number | string;
}

export {
  SubmissionsData,
  Filter,
};