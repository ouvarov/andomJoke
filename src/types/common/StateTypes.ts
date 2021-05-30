import { JokeTypes } from './JokeTypes';

export type StateTypes = {
    jokes: {
        data: JokeTypes[];
        favoriteList: JokeTypes[];
        typeJoke: string;
        categories: [string];
        jokeCategory: string;
        value: string;
        alertText: string;
    };
};
