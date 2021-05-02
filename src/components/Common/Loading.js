import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css';

const Loading = () => {
    return (
        <div className="loading">
            <div className="loading-spinner">
                <Spinner animation="border" />
            </div>
        </div>
    );
};

export default Loading;
