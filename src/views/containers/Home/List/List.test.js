import { render } from '@testing-library/react';
import List from './index';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('renders List component', () => {
    const initialState = {
        dashboard: { resetList: false }
    };
    const mockStore = configureStore();
    let store;
    
    it('test default render', () => {
        store = mockStore(initialState);
        const {container} = render(<Provider store={store}><List /></Provider>);
        expect(container.firstChild).toHaveClass("list");
        expect(container.firstChild.childNodes[0]).toHaveClass("list__wrapper");
        expect(container.childNodes[1]).toBeUndefined();
    });
});