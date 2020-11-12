import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import './DetailPopup.scss';
import cx from 'classnames';
import moment from 'moment';
import { assetUrl } from 'helpers/common';
import { setSelectedPlanet } from 'store/action/dashboard';

const DetailPopup = props => {
    const dispatch = useDispatch();
    const { selectedPlanet } = useSelector(state => state.dashboard);
    const classNames = cx("detail-popup", {
        "show": selectedPlanet !== null
    })

    const close = () => {
        dispatch(setSelectedPlanet(null));
    }

    return (
        <div className={classNames}>
            <div className="detail-popup__overlay" onClick={close} />
            {selectedPlanet &&
                <div className="detail-popup__wrapper">
                    <div className="detail-popup__header">
                        <a href={selectedPlanet.url} target="_blank">
                            <h3>{selectedPlanet.name}</h3>
                        </a>
                        <img src={assetUrl('/images/icons/close_white.svg')} alt="close" onClick={close} />
                    </div>
                    <div className="detail-popup__body">
                        <div className="detail-popup__tile">
                            <p>CREATED <span>{moment(selectedPlanet.created).format("YYYY-MM-DD hh:mm:ss")}</span></p>
                            <p>EDITED <span>{moment(selectedPlanet.edited).format("YYYY-MM-DD hh:mm:ss")}</span></p>
                        </div>
                        <div className="detail-popup__tile">
                            <p>CLIMATE <span>{selectedPlanet.climate}</span></p>
                            <p>DIAMETER <span>{selectedPlanet.diameter}</span></p>
                            <p>GRAVITY <span>{selectedPlanet.gravity}</span></p>
                            <p>ORBITAL PERIOD <span>{selectedPlanet.orbital_period}</span></p>
                            <p>POPULATION <span>{selectedPlanet.population}</span></p>
                            <p>ROTATION PERIOD <span>{selectedPlanet.rotation_period}</span></p>
                            <p>SURFACE WATER <span>{selectedPlanet.surface_water}</span></p>
                            <p>TERRAIN <span>{selectedPlanet.terrain}</span></p>
                        </div>
                        <div className="detail-popup__tile">
                            <p>FILMS</p>
                            <ul>
                                {selectedPlanet.films.map((film, idx) => {
                                    return (
                                        <li key={idx}><a href={film} target="_blank">{film}</a></li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="detail-popup__tile">
                            <p>RESIDENTS</p>
                            <ul>
                                {selectedPlanet.residents.map((resident, idx) => {
                                    return (
                                        <li key={idx}><a href={resident} target="_blank">{resident}</a></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default DetailPopup;