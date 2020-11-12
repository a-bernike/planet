import React from 'react';

const Tile = props => {
    const {item, ...rest} = props;
    if (!item) return null;
    
    return (
        <div className="list__tile" {...rest}>
            <p>{item.name}</p>
        </div>
    )
}

export default Tile;