import { JokeTypes } from './JokeTypes';

export type StateTypes = {
    jokes: {
        data: JokeTypes[];
        favoriteList: JokeTypes[];
        typeJoke: string;
        categories: [];
        jokeCategory: string;
        value: string;
    };
};
