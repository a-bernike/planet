import { render } from '@testing-library/react';
import Loader from './index';
import { assetUrl } from 'helpers/common';

describe('renders Loader component', () => {
    it('test with fullscreen prop is true', () => {
        const {container} = render(<Loader />);
        expect(container.firstChild).toHaveClass("loader fullscreen");
        expect(container.firstChild.childNodes[0]).toHaveClass("loader__overlay");
        expect(container.firstChild.childNodes[1]).toHaveAttribute("alt", "loader");
        expect(container.firstChild.childNodes[1]).toHaveAttribute("src", assetUrl('/images/ufo.png'));
    });
    it('test with fullscreen prop is false', () => {
        const props = {fullscreen: false}
        const {container} = render(<Loader {...props} />);
        expect(container.firstChild).toHaveClass("loader");
        expect(container.firstChild).not.toHaveClass("fullscreen");
        expect(container.firstChild.childNodes[0]).toHaveClass("loader__overlay");
        expect(container.firstChild.childNodes[1]).toHaveAttribute("alt", "loader");
        expect(container.firstChild.childNodes[1]).toHaveAttribute("src", assetUrl('/images/ufo.png'));
    });
});