import React from 'react';
import './TextInput.scss';
import cx from 'classnames';

const TextInput = props => {
    const {customClass, value, type, icon, ...rest} = props;
    const classNames = cx("text-input", {
        "with-icon": icon
    }, customClass);

    return (
        <div className={classNames}>
            <div className="text-input__wrapper">
                <input type={type} value={value} {...rest} />
                {icon && <img src={icon} alt="icon" />}
            </div>
        </div>
    )
}

TextInput.defaultProps = {
    type: 'text',
    icon: null
}

export default TextInput;