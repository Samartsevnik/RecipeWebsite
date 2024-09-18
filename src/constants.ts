import { IOption } from './components/Selector/Selector.tsx';

export const APP_NAME = 'Recipe Website';

export const PAGINATION_MAX_ITEMS = 5;

export const CUISINES = [
  'African',
  'Asian',
  'American',
  'British',
  'Cajun',
  'Caribbean',
  'Chinese',
  'Eastern European',
  'European',
  'French',
  'German',
  'Greek',
  'Indian',
  'Irish',
  'Italian',
  'Japanese',
  'Jewish',
  'Korean',
  'Latin American',
  'Mediterranean',
  'Mexican',
  'Middle Eastern',
  'Nordic',
  'Southern',
  'Spanish',
  'Thai',
  'Vietnamese',
];

export const cuisineOptions: IOption[] = CUISINES.map((cuisine) => ({
  value: cuisine,
  label: cuisine,
}));
