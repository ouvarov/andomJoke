import { ACTIVE_TYPE } from '../reducers/consts';

export const setValueAction = (value: string) => ({ type: ACTIVE_TYPE.SET_VALUE, value });
