import {constDashboard} from '../constant/dashboard';

const initialState = {
    selectedPlanet: null,
    resetList: false
};

const dashboard = (state = initialState, action) => {
    switch (action.type) {
        case constDashboard.SET_SELECTED_PLANET:
            return {
                ...state,
                selectedPlanet: action.value
            };
        case constDashboard.SET_RESET_LIST:
            return {
                ...state,
                resetList: action.value
            };
        default:
            return state;
    }
};
  
  export default dashboard;  