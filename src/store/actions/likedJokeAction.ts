import { ACTIVE_TYPE } from '../reducers/consts';

export const likedJokeAction = (jokeId: string) => ({ type: ACTIVE_TYPE.LIKED, jokeId });
