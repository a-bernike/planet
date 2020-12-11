import React, {useState, useEffect, useRef} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setResetList, setSelectedPlanet } from 'store/action/dashboard';
import './List.scss';
import InfiniteScroll from 'react-infinite-scroller';
import { getPlanets, getPlanetDetail } from 'services/Planet';
import { Loader, TextInput } from 'views/components/widgets';
import Empty from './Empty';
import Tile from './Tile';

const List = props => {
    const dispatch = useDispatch();
    const {keyword} = props;
    const { resetList } = useSelector(state => state.dashboard);
    const refScroller = useRef();
    const [data, setData] = useState([]);
    const [listStatus, setListStatus] = useState({loading: false, end: false});
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");

    useEffect(() => {
        if (resetList) {
            setData([]);
            setListStatus({loading: false, end: false});
            refScroller.current.pageLoaded = 0;
            dispatch(setResetList(false));
        }
    }, [resetList]);

    const loadItems = (page) => {
        setListStatus({loading: true, end: listStatus.end})
        getPlanets(page, keyword).then(res => {
            const getMore = (res && res.next)
            if (res && res.results.length > 0) {
                setData(data.concat(res.results))
            }
            setListStatus({loading: false, end: !getMore})
        })
    }
    const clickItem = (id) => {
        setLoading(true);
        getPlanetDetail(id).then(res => {
            setLoading(false);
            if (res) {
                dispatch(setSelectedPlanet(res));
            }
        })
    }

    const nameKeyUp = (e) => {
        if (e.which === 13) {
            console.log(name)
            setListStatus({loading: false, end: true})
            setData([{name, url: ''}].concat(data))
        }
    }

    const items = data.map((item, idx) => {
        const splitItemUrl = item.url.split('/');
        const itemId = splitItemUrl[splitItemUrl.length - 2];
        return (
            <Tile
                key={idx}
                item={item}
                onClick={() => clickItem(itemId)}
            />
        )
    })

    return (
        <>
            <TextInput
                value={name}
                placeholder="Name..."
                onChange={(e) => setName(e.target.value)}
                onKeyUp={nameKeyUp}
            />
            <div className="list">
                <InfiniteScroll
                    className="list__wrapper"
                    ref={refScroller}
                    pageStart={0}
                    loadMore={loadItems}
                    hasMore={!listStatus.loading && !listStatus.end}
                    useWindow={false}
                >
                    {items}
                </InfiniteScroll>
                {(data.length === 0 && listStatus.end) && <Empty keyword={keyword} />}
                {listStatus.loading && <Loader key="list-loader" fullscreen={false} />}
            </div>
            {loading && <Loader key="process-loader" />}
        </>
    )
}

export default List;