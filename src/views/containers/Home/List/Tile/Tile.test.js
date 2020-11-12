import { render } from '@testing-library/react';
import Tile from './index';

describe('renders Tile component', () => {
    it('renders null if there is no item prop', () => {
        const {container} = render(<Tile />);
        expect(container.firstChild).toBeNull();
    });
    it('renders item name if exist', () => {
        const props = {
            item: {name: "Tatooine"}
        }
        const {container} = render(<Tile {...props} />);
        expect(container.firstChild).toHaveClass("list__tile");
        expect(container.firstChild.childNodes[0].nodeName).toBe("P");
        expect(container.firstChild.childNodes[0].textContent).toBe("Tatooine");
    });
});