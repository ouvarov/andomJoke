import { ACTIVE_TYPE } from '../reducers/consts';

export const setRandomTypeAction = (typeJoke: string) => ({ type: ACTIVE_TYPE.SET_TYPE, typeJoke });
