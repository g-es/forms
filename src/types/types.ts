enum QuestionType {
  Address = 'Address',
  AudioRecording = 'AudioRecording',
  Calcom = 'Calcom',
  Calendly = 'Calendly',
  Captcha = 'Captcha',
  Checkbox = 'Checkbox',
  Checkboxes = 'Checkboxes',
  ColorPicker = 'ColorPicker',
  CurrencyInput = 'CurrencyInput',
  DatePicker = 'DatePicker',
  DateRange = 'DateRange',
  DateTimePicker = 'DateTimePicker',
  Dropdown = 'Dropdown',
  EmailInput = 'EmailInput',
  FileUpload = 'FileUpload',
  ImagePicker = 'ImagePicker',
  LocationCoordinates = 'LocationCoordinates',
  LongAnswer = 'LongAnswer',
  Matrix = 'Matrix',
  MultiSelect = 'MultiSelect',
  MultipleChoice = 'MultipleChoice',
  NumberInput = 'NumberInput',
  OpinionScale = 'OpinionScale',
  Password = 'Password',
  Payment = 'Payment',
  PhoneNumber = 'PhoneNumber',
  Ranking = 'Ranking',
  RecordPicker = 'RecordPicker',
  ShortAnswer = 'ShortAnswer',
  Signature = 'Signature',
  Slider = 'Slider',
  StarRating = 'StarRating',
  Switch = 'Switch',
  TimePicker = 'TimePicker',
  URLInput = 'URLInput',
}

enum CalculationType {
  Number = 'number',
  Text = 'text',
}

enum Condition {
  Equals = 'equals',
  DoesNotEqual = 'does_not_equal',
  GreaterThan = 'greater_than',
  LessThan = 'less_than',
}

interface Question {
  id: string;
  name: string;
  type: QuestionType;
  value: number | string | null;
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
  quiz?: Quiz | {}; // if not a quiz, it would be an empty object?
  submissionId: string;
  submissionTime: string;
  lastUpdatedAt: string;
  documents?: string[]; // is it string
  editLink?: string;
}

interface SubmissionsData {
  responses: Submission[];
  totalResponses: number;
  pageCount: number;
}

interface FilterClauseType {
  id: string;
  condition: Condition;
  value: number | string;
}

export {
  SubmissionsData,
  Submission,
  FilterClauseType,
  Condition,
  QuestionType,
};