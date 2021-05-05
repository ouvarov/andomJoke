import { JokeTypes } from '../../types';

export type jokeActionType = {
    type: string;
    categories: [];
    data: JokeTypes[];
    typeJoke: string;
    categoryType: string;
    jokeCategory: string;
    value: string;
    jokeId: string;
};

export type jokeType = {
    data: JokeTypes[];
    favoriteList: JokeTypes[];
    categories: [];
    typeJoke: string;
    jokeCategory: string;
    value: string;
};
