import { ACTIVE_TYPE } from '../reducers/consts';

export const unlikedJokeAction = (jokeId: string) => ({ type: ACTIVE_TYPE.UNLIKED, jokeId });
