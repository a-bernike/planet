import React from 'react';
import './Loader.scss';
import cx from 'classnames';
import { assetUrl } from 'helpers/common';

const Loader = props => {
    const {fullscreen} = props;
    const classNames = cx("loader", {
        "fullscreen": fullscreen
    })

    return (
        <div className={classNames}>
            <div className="loader__overlay" />
            <img src={assetUrl('/images/ufo.png')} alt="loader" />
        </div>
    )
}

Loader.defaultProps = {
    fullscreen: true
}

export default Loader;