import {constDashboard} from '../constant/dashboard';

export const setSelectedPlanet = (value) => {
    return {type: constDashboard.SET_SELECTED_PLANET, value }
}

export const setResetList = (value) => {
    return {type: constDashboard.SET_RESET_LIST, value }
}