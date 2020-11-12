import { render } from '@testing-library/react';
import Empty from './index';

describe('renders Empty component', () => {
    it('renders without props', () => {
        const {container} = render(<Empty />);
        expect(container.firstChild).toHaveClass("list__empty");
    });
    it('renders with props', () => {
        const props = {
            keyword: "testing"
        }
        const {container} = render(<Empty {...props} />);
        expect(container.firstChild).toHaveClass("list__empty");
        expect(container.firstChild.childNodes[0].nodeName).toBe("H6");
        expect(container.firstChild.childNodes[0].textContent).toBe("Planet(s) testing not found");
    });
});