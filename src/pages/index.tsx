import React from 'react';
import { useSelector } from 'react-redux';

import { CategoryList, Card } from '../common/components';
import { JokeTypes, StateTypes } from '../types';

const IndexPage: React.FC = () => {
    const jokes = useSelector((state: StateTypes) => state.jokes);

    return (
        <div className="page">
            <div className="page__wrap">
                <h1 className="page__title">Hey!</h1>
                <h3 className="page__subtitle">Let’s try to find a joke for you:</h3>
                <CategoryList />
                {!!jokes.data.length &&
                    jokes.data.map(
                        ({
                            categories,
                            created_at,
                            icon_url,
                            id,
                            updated_at,
                            url,
                            value,
                            liked = false,
                        }: JokeTypes) => (
                            <Card
                                key={id}
                                id={id}
                                value={value}
                                categories={categories}
                                created_at={created_at}
                                icon_url={icon_url}
                                updated_at={updated_at}
                                url={url}
                                liked={liked}
                            />
                        ),
                    )}
            </div>
            {!!jokes.favoriteList.length && (
                <div className="page__wrap page__wrap--small">
                    <h3 className="page__subtitle page__subtitle--grey">Favorite</h3>
                    {jokes.favoriteList.map(
                        ({ categories, created_at, icon_url, id, updated_at, url, value }: JokeTypes) => (
                            <Card
                                key={`favorite-${id}`}
                                id={id}
                                value={value}
                                categories={categories}
                                created_at={created_at}
                                icon_url={icon_url}
                                updated_at={updated_at}
                                url={url}
                                liked
                                className="card--favorite"
                            />
                        ),
                    )}
                </div>
            )}
        </div>
    );
};

export default IndexPage;
