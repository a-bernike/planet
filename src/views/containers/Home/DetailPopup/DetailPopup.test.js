import { render } from '@testing-library/react';
import DetailPopup from './index';
import { assetUrl } from 'helpers/common';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import moment from 'moment';

describe('renders DetailPopup component', () => {
    const initialState = {
        dashboard: { selectedPlanet: null }
    };
    const mockStore = configureStore();
    let store;
    
    it('test with selectedPlanet state is null', () => {
        store = mockStore(initialState);
        const {container} = render(<Provider store={store}><DetailPopup /></Provider>);
        expect(container.firstChild).toHaveClass("detail-popup");
        expect(container.firstChild.childNodes[0]).toHaveClass("detail-popup__overlay");
        expect(container.firstChild.childNodes[1]).toBeUndefined();
    });
    it('test with selectedPlanet state is not empty', () => {
        const planet = {
            "name": "Tatooine", 
            "rotation_period": "23", 
            "orbital_period": "304", 
            "diameter": "10465", 
            "climate": "arid", 
            "gravity": "1 standard", 
            "terrain": "desert", 
            "surface_water": "1", 
            "population": "200000", 
            "residents": [
                "http://swapi.dev/api/people/1/", 
                "http://swapi.dev/api/people/2/", 
                "http://swapi.dev/api/people/4/", 
                "http://swapi.dev/api/people/6/", 
                "http://swapi.dev/api/people/7/", 
                "http://swapi.dev/api/people/8/", 
                "http://swapi.dev/api/people/9/", 
                "http://swapi.dev/api/people/11/", 
                "http://swapi.dev/api/people/43/", 
                "http://swapi.dev/api/people/62/"
            ], 
            "films": [
                "http://swapi.dev/api/films/1/", 
                "http://swapi.dev/api/films/3/", 
                "http://swapi.dev/api/films/4/", 
                "http://swapi.dev/api/films/5/", 
                "http://swapi.dev/api/films/6/"
            ], 
            "created": "2014-12-09T13:50:49.641000Z", 
            "edited": "2014-12-20T20:58:18.411000Z", 
            "url": "http://swapi.dev/api/planets/1/"
        };
        initialState.dashboard.selectedPlanet = planet;
        const {container} = render(<Provider store={store}><DetailPopup /></Provider>);
        expect(container.firstChild).toHaveClass("detail-popup show");
        expect(container.firstChild.childNodes[0]).toHaveClass("detail-popup__overlay");

        const modalContent = container.firstChild.childNodes[1];
        expect(modalContent).toHaveClass("detail-popup__wrapper");

        const modalHeader = modalContent.childNodes[0];
        expect(modalHeader).toHaveClass("detail-popup__header");
        expect(modalHeader.childNodes[0].nodeName).toBe("A");
        expect(modalHeader.childNodes[0]).toHaveAttribute("target", "_blank");
        expect(modalHeader.childNodes[0]).toHaveAttribute("href", planet.url);
        expect(modalHeader.childNodes[0].textContent).toBe(planet.name);
        expect(modalHeader.childNodes[1].nodeName).toBe("IMG");
        expect(modalHeader.childNodes[1]).toHaveAttribute("alt", "close");
        expect(modalHeader.childNodes[1]).toHaveAttribute("src", assetUrl('/images/icons/close_white.svg'));
        
        const modalBody = modalContent.childNodes[1];
        expect(modalBody).toHaveClass("detail-popup__body");
        expect(modalBody.childNodes[0]).toHaveClass("detail-popup__tile");
        expect(modalBody.childNodes[0].childNodes[0].textContent).toBe(`CREATED ${moment(planet.created).format("YYYY-MM-DD hh:mm:ss")}`);
        expect(modalBody.childNodes[0].childNodes[1].textContent).toBe(`EDITED ${moment(planet.edited).format("YYYY-MM-DD hh:mm:ss")}`);
        expect(modalBody.childNodes[1]).toHaveClass("detail-popup__tile");
        expect(modalBody.childNodes[1].childNodes[0].textContent).toBe(`CLIMATE ${planet.climate}`);
        expect(modalBody.childNodes[1].childNodes[1].textContent).toBe(`DIAMETER ${planet.diameter}`);
        expect(modalBody.childNodes[1].childNodes[2].textContent).toBe(`GRAVITY ${planet.gravity}`);
        expect(modalBody.childNodes[1].childNodes[3].textContent).toBe(`ORBITAL PERIOD ${planet.orbital_period}`);
        expect(modalBody.childNodes[1].childNodes[4].textContent).toBe(`POPULATION ${planet.population}`);
        expect(modalBody.childNodes[1].childNodes[5].textContent).toBe(`ROTATION PERIOD ${planet.rotation_period}`);
        expect(modalBody.childNodes[1].childNodes[6].textContent).toBe(`SURFACE WATER ${planet.surface_water}`);
        expect(modalBody.childNodes[1].childNodes[7].textContent).toBe(`TERRAIN ${planet.terrain}`);
        expect(modalBody.childNodes[2]).toHaveClass("detail-popup__tile");
        expect(modalBody.childNodes[2].childNodes[0].textContent).toBe("FILMS");
        expect(modalBody.childNodes[2].childNodes[1].nodeName).toBe("UL");
        const listFilms = modalBody.childNodes[2].childNodes[1].childNodes;
        for (let i=0; i<listFilms.length; i++) {
            const listEl = listFilms[i];
            const film = planet.films[i];
            expect(listEl.nodeName).toBe("LI");
            expect(listEl.childNodes[0].nodeName).toBe("A");
            expect(listEl.childNodes[0]).toHaveAttribute("target", "_blank");
            expect(listEl.childNodes[0]).toHaveAttribute("href", film);
            expect(listEl.childNodes[0].textContent).toBe(film);
        }
        expect(modalBody.childNodes[3]).toHaveClass("detail-popup__tile");
        expect(modalBody.childNodes[3].childNodes[0].textContent).toBe("RESIDENTS");
        expect(modalBody.childNodes[3].childNodes[1].nodeName).toBe("UL");
        const listResidents = modalBody.childNodes[3].childNodes[1].childNodes;
        for (let i=0; i<listResidents.length; i++) {
            const listEl = listResidents[i];
            const resident = planet.residents[i];
            expect(listEl.nodeName).toBe("LI");
            expect(listEl.childNodes[0].nodeName).toBe("A");
            expect(listEl.childNodes[0]).toHaveAttribute("target", "_blank");
            expect(listEl.childNodes[0]).toHaveAttribute("href", resident);
            expect(listEl.childNodes[0].textContent).toBe(resident);
        }
    });
    it('test with selectedPlanet state not having films and residents data', () => {
        const planet = {
            "name": "Tatooine", 
            "rotation_period": "23", 
            "orbital_period": "304", 
            "diameter": "10465", 
            "climate": "arid", 
            "gravity": "1 standard", 
            "terrain": "desert", 
            "surface_water": "1", 
            "population": "200000", 
            "residents": [], 
            "films": [], 
            "created": "2014-12-09T13:50:49.641000Z", 
            "edited": "2014-12-20T20:58:18.411000Z", 
            "url": "http://swapi.dev/api/planets/1/"
        };
        initialState.dashboard.selectedPlanet = planet;
        const {container} = render(<Provider store={store}><DetailPopup /></Provider>);
        const modalContent = container.firstChild.childNodes[1];
        const modalBody = modalContent.childNodes[1];
        expect(modalBody.childNodes[2]).toHaveClass("detail-popup__tile");
        expect(modalBody.childNodes[2].childNodes[0].textContent).toBe("FILMS");
        expect(modalBody.childNodes[2].childNodes[1].nodeName).toBe("UL");
        expect(modalBody.childNodes[2].childNodes[1].childNodes.length).toBe(0);
        expect(modalBody.childNodes[3]).toHaveClass("detail-popup__tile");
        expect(modalBody.childNodes[3].childNodes[0].textContent).toBe("RESIDENTS");
        expect(modalBody.childNodes[3].childNodes[1].nodeName).toBe("UL");
        expect(modalBody.childNodes[3].childNodes[1].childNodes.length).toBe(0);
    });
});