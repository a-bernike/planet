import { render } from '@testing-library/react';
import TextInput from './index';

describe('renders TextInput component', () => {
    it('test with default props', () => {
        const {container} = render(<TextInput />);
        expect(container.firstChild).toHaveClass("text-input");
        expect(container.firstChild).not.toHaveClass("with-icon");
        expect(container.firstChild.childNodes[0]).toHaveClass("text-input__wrapper");
        expect(container.firstChild.childNodes[0].childNodes[0].nodeName).toBe("INPUT");
        expect(container.firstChild.childNodes[0].childNodes[0]).toHaveAttribute("type", "text");
        expect(container.firstChild.childNodes[0].childNodes[0]).toHaveAttribute("value", undefined);
        expect(container.firstChild.childNodes[0].childNodes[1]).toBeUndefined();
    });
    it('test with custom props', () => {
        const props = {
            customClass: "testing",
            defaultValue: "planet",
            type: "email",
            icon: "search.svg"
        }
        const {container} = render(<TextInput {...props} />);
        expect(container.firstChild).toHaveClass("text-input with-icon testing");
        expect(container.firstChild.childNodes[0]).toHaveClass("text-input__wrapper");
        expect(container.firstChild.childNodes[0].childNodes[0].nodeName).toBe("INPUT");
        expect(container.firstChild.childNodes[0].childNodes[0]).toHaveAttribute("type", "email");
        expect(container.firstChild.childNodes[0].childNodes[0]).toHaveAttribute("value", "planet");
        expect(container.firstChild.childNodes[0].childNodes[1].nodeName).toBe("IMG");
        expect(container.firstChild.childNodes[0].childNodes[1]).toHaveAttribute("alt", "icon");
        expect(container.firstChild.childNodes[0].childNodes[1]).toHaveAttribute("src", "search.svg");
    });
});