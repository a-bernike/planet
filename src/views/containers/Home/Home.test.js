import { render, fireEvent } from '@testing-library/react';
import Home from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('renders Home component', () => {
    const initialState = {
        dashboard: { resetList: false }
    };
    const mockStore = configureStore();
    let store;

    it('test default render', () => {
        store = mockStore(initialState);
        const {container} = render(<Provider store={store}><Home /></Provider>);
        expect(container.firstChild).toHaveClass("home");
        expect(container.firstChild.childNodes[0]).toHaveClass("home__content");
        expect(container.firstChild.childNodes[0].childNodes[0]).toHaveClass("text-input");
        expect(container.firstChild.childNodes[0].childNodes[1]).toHaveClass("list");
        expect(container.firstChild.childNodes[1]).toHaveClass("detail-popup");
    });
    it('test changing input value', () => {
        const {container} = render(<Provider store={store}><Home /></Provider>);
        const textField = container.querySelector('input');
        expect(textField).toHaveAttribute("value", "");
        fireEvent.change(textField, {
            target: { value: "test" }
        })
        expect(textField).toHaveAttribute("value", "test");
    });
});