import React, {useState, useEffect} from 'react';

const Empty = props => {
    const {keyword} = props;
    const [currentSearch, setCurrentSearch] = useState();

    useEffect(() => {
        setCurrentSearch(keyword)
    }, []);

    return (
        <div className="list__empty">
            <h6>Planet(s) <i>{currentSearch}</i> not found</h6>
        </div>
    )
}

export default Empty;