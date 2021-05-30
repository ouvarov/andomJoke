import { ACTIVE_TYPE } from '../reducers/consts';

export const setCategoriesAction = (categories: []) => ({ type: ACTIVE_TYPE.SET_CATEGORIES, categories });
export const setJokeCategoryAction = (jokeCategory: string) => ({ type: ACTIVE_TYPE.SET_JOKE_CATEGORY, jokeCategory });
export const setValueAction = (value: string) => ({ type: ACTIVE_TYPE.SET_VALUE, value });
export const setRandomTypeAction = (typeJoke: string) => ({ type: ACTIVE_TYPE.SET_TYPE, typeJoke });
