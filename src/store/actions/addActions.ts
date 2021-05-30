import { ACTIVE_TYPE } from '../reducers/consts';

export const addJokeAction = (data: any) => ({ type: ACTIVE_TYPE.ADD_JOKE, data });
export const addJokesAction = (data: any) => ({ type: ACTIVE_TYPE.ADD_JOKES, data });
