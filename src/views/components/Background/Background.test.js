import { render } from '@testing-library/react';
import Background from './index';

test('renders Background component', () => {
  const {container} = render(<Background />);
  expect(container.firstChild).toHaveClass("bg");
  expect(container.firstChild.childNodes[0]).toHaveClass("star star-sm");
  expect(container.firstChild.childNodes[1]).toHaveClass("star star-md");
  expect(container.firstChild.childNodes[2]).toHaveClass("star star-lg");
});