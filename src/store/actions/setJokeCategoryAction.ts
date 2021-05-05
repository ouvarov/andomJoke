import { ACTIVE_TYPE } from '../reducers/consts';

export const setJokeCategoryAction = (jokeCategory: string) => ({ type: ACTIVE_TYPE.SET_JOKE_CATEGORY, jokeCategory });
