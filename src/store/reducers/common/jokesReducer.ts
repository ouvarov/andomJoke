import { ACTIVE_TYPE } from '../consts';
import { jokeActionType, jokeType } from '../types';
import { JokeTypes } from '../../../types';

const jokesReducer = (
    jokes: jokeType = {
        data: [],
        favoriteList: [],
        typeJoke: 'RANDOM',
        categories: [],
        jokeCategory: '',
        value: '',
        alertText: '',
    },
    action: jokeActionType,
) => {
    switch (action.type) {
        case ACTIVE_TYPE.SET_TYPE:
            return { ...jokes, typeJoke: action.typeJoke };
        case ACTIVE_TYPE.SET_CATEGORIES:
            return { ...jokes, categories: action.categories };
        case ACTIVE_TYPE.SET_JOKE_CATEGORY:
            return { ...jokes, jokeCategory: action.jokeCategory };
        case ACTIVE_TYPE.SET_VALUE:
            return { ...jokes, value: action.value };
        case ACTIVE_TYPE.ADD_JOKE:
            return { ...jokes, data: [action.data] };
        case ACTIVE_TYPE.ADD_JOKES:
            return { ...jokes, data: action.data };
        case ACTIVE_TYPE.LIKED:
            return {
                ...jokes,
                data: jokes.data.map((u: JokeTypes) => {
                    if (u.id === action.jokeId) {
                        return { ...u, liked: true };
                    }
                    return u;
                }),
                favoriteList: [...jokes.favoriteList, jokes.data.find(x => x.id === action.jokeId)],
            };
        case ACTIVE_TYPE.UNLIKED:
            return {
                ...jokes,
                data: jokes.data.map((u: any) => {
                    if (u.id === action.jokeId) {
                        return { ...u, liked: false };
                    }
                    return u;
                }),
                favoriteList: jokes.favoriteList.filter(item => item.id !== action.jokeId),
            };
        case ACTIVE_TYPE.SET_ALERT_TEXT:
            return { ...jokes, alertText: action.alertText };
        case ACTIVE_TYPE.CLEAR_ALERT_TEXT:
            return { ...jokes, alertText: '' };
        default:
            return jokes;
    }
};

export default jokesReducer;
