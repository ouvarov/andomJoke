import React from 'react';
import { useDispatch } from 'react-redux';

import { LikeIcon } from '../Svg';

import toDate from '../../../helpers/toDate';
import { likedJokeAction, unlikedJokeAction } from '../../../store/actions';

type CardPropsType = {
    categories: [];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
    liked: boolean;
    className?: string;
};

const Card: React.FC<CardPropsType> = ({ url, id, value, icon_url, updated_at, categories, liked, className }) => {
    const dispatch = useDispatch();

    const handleOnClick = (jokeId: string): void => {
        if (liked) {
            dispatch(unlikedJokeAction(jokeId));
        } else {
            dispatch(likedJokeAction(jokeId));
        }
    };

    return (
        <div className={`card ${className}`}>
            <header className="card__header">
                <button
                    className="card__button"
                    onClick={() => {
                        handleOnClick(id);
                    }}
                >
                    <LikeIcon isLike={liked} />
                </button>
            </header>
            <div className="card__body">
                <figure className="card__icon-wrap">
                    <img className="card__icon" src={icon_url} alt="icon" />
                </figure>
                <div className="card__content-wrap">
                    <p className="card__link-wrap">
                        ID:
                        <a href={url} className="card__link" rel="noreferrer" target="_blank">
                            {id}
                        </a>
                    </p>
                    <p className="card__content">{value}</p>
                    <footer className="card__footer">
                        <p className="card__date">Last update: {toDate(updated_at)}</p>
                        <div className="card__category-wrap">
                            {!!categories.length && (
                                <>
                                    {categories.map(item => (
                                        <p className="card__category">{item}</p>
                                    ))}
                                </>
                            )}
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default Card;
