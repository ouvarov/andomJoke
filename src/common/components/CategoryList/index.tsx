import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import classNames from 'classnames';

import { Button, Radio } from '../';

import { CATEGORY_TYPE } from '../consts';
import { API } from '../../../const';
import { StateTypes } from '../../../types';

import {
    setCategoriesAction,
    setRandomTypeAction,
    setJokeCategoryAction,
    setValueAction,
    addJokeAction,
    addJokesAction,
    setAlertTextAction,
} from '../../../store/actions';

const CategoryList: React.FC = () => {
    const dispatch = useDispatch();
    const [handleClick, setHandleClick] = useState<boolean>(false);

    const data = useSelector((state: StateTypes) => state.jokes);

    const getCategories = (): void => {
        axios.get(`${API}categories`).then(response => {
            dispatch(setCategoriesAction(response.data));
        });
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(setValueAction(e.target.value));
    };

    const handleQuery = () => {
        switch (data.typeJoke) {
            case CATEGORY_TYPE.SEARCH:
                return axios
                    .get(`${API}search?query=${data.value}`)
                    .then(response => {
                        dispatch(addJokesAction(response.data.result));
                    })
                    .catch(error => dispatch(setAlertTextAction(error.response.data.message)));
            case CATEGORY_TYPE.CATEGORY:
                return axios
                    .get(`${API}random?category=${data.jokeCategory}`)
                    .then(response => {
                        dispatch(addJokeAction(response.data));
                    })
                    .catch(error => dispatch(setAlertTextAction(error.response.data.message)));
            default:
                return axios
                    .get(`${API}random`)
                    .then(response => {
                        dispatch(addJokeAction(response.data));
                    })
                    .catch(error => dispatch(setAlertTextAction(error.response.data.message)));
        }
    };

    const isDisabled = () =>
        (data.typeJoke === CATEGORY_TYPE.SEARCH && !data.value.length) ||
        (data.typeJoke === CATEGORY_TYPE.CATEGORY && !data.jokeCategory.length);

    useEffect(getCategories, []);

    return (
        <div className="category-list">
            {/* eslint-disable-next-line jsx-a11y/label-has-for */}
            <label htmlFor="random" className="category-list__label">
                <Radio
                    id="random"
                    onChange={() => dispatch(setRandomTypeAction(CATEGORY_TYPE.RANDOM))}
                    checked={data.typeJoke === CATEGORY_TYPE.RANDOM}
                />
                Random
            </label>
            {/* eslint-disable-next-line jsx-a11y/label-has-for */}
            <label htmlFor="category" className="category-list__label">
                <Radio
                    id="category"
                    onChange={() => dispatch(setRandomTypeAction(CATEGORY_TYPE.CATEGORY))}
                    checked={data.typeJoke === CATEGORY_TYPE.CATEGORY}
                />
                From categories
            </label>
            {data.typeJoke === CATEGORY_TYPE.CATEGORY && (
                <div className="category-buttons">
                    {data.categories.map(item => (
                        <Button
                            key={item}
                            className={classNames('category-buttons__item', {
                                'category-buttons__item--active': data.jokeCategory === item,
                            })}
                            onClick={() => {
                                dispatch(setJokeCategoryAction(item));
                            }}
                        >
                            {item}
                        </Button>
                    ))}
                </div>
            )}
            {/* eslint-disable-next-line jsx-a11y/label-has-for */}
            <label htmlFor="search" className="category-list__label">
                <Radio
                    id="search"
                    onChange={() => dispatch(setRandomTypeAction(CATEGORY_TYPE.SEARCH))}
                    checked={data.typeJoke === CATEGORY_TYPE.SEARCH}
                />
                Search
            </label>
            {data.typeJoke === CATEGORY_TYPE.SEARCH && (
                <div className="category-list__input-wrap">
                    <input
                        className="category-list__input"
                        placeholder="Free text search..."
                        type="text"
                        onChange={onChange}
                        value={data.value}
                    />
                </div>
            )}
            <div>
                <Button
                    isDisabled={isDisabled()}
                    className="category-list__button"
                    onClick={() => {
                        setHandleClick(true);
                        handleQuery();
                    }}
                >
                    Get a joke
                </Button>
            </div>
            {handleClick && !data.data.length && <div className="category-list__empty">Result not found</div>}
        </div>
    );
};

export default CategoryList;
