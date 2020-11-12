import React, {useState} from 'react';
import { useDispatch } from "react-redux";
import { setResetList } from 'store/action/dashboard';
import './Home.scss';
import { TextInput } from 'views/components/widgets';
import { assetUrl } from 'helpers/common';
import List from './List';
import DetailPopup from './DetailPopup';

const Home = props => {
    const dispatch = useDispatch();
    const [keyword, setKeyword] = useState("");

    const inputKeyUp = (e) => {
        if (e.which === 13) {
            dispatch(setResetList(true));
        }
    }

    return (
        <div className="home">
            <div className="home__content">
                <TextInput
                    value={keyword}
                    placeholder="Search planet..."
                    icon={assetUrl('/images/icons/search.svg')}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyUp={inputKeyUp}
                />
                <List keyword={keyword} />
            </div>
            <DetailPopup />
        </div>
    )
}

export default Home;