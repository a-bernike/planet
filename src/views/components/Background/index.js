import React from 'react';
import './Background.scss';

const Background = props => {
    return (
        <div className="bg">
            <span className="star star-sm" />
            <span className="star star-md" />
            <span className="star star-lg" />
        </div>
    )
}

export default Background;