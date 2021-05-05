import { ACTIVE_TYPE } from '../reducers/consts';

export const setCategoriesAction = (categories: []) => ({ type: ACTIVE_TYPE.SET_CATEGORIES, categories });
