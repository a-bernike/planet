import { render } from '@testing-library/react';
import Header from './index';

test('renders Header component', () => {
  const {container} = render(<Header />);
  expect(container.firstChild).toHaveClass("header");
  expect(container.firstChild.childNodes[0]).toHaveTextContent("Search for PLANET")
  expect(container.firstChild.childNodes[0].lastChild).toHaveClass("font-goldman")
  expect(container.firstChild.childNodes[1]).toHaveClass("header__line");
});