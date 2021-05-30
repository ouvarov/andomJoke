import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StateTypes } from '../../../types';
import { clearAlertTextAction } from '../../../store/actions';

const Alert: React.FC = () => {
    const dispatch = useDispatch();
    const alertText = useSelector((state: StateTypes) => state.jokes.alertText);

    useEffect(() => {
        if (alertText?.length) {
            setTimeout(() => {
                dispatch(clearAlertTextAction());
            }, 3000);
        }
    }, [alertText]);

    return (
        <>
            {alertText?.length && (
                <div className="alert">
                    <div className="alert__grid">
                        <p className="alert__text">{alertText}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default Alert;
