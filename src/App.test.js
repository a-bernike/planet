import { render } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  const {container} = render(<App />);
  expect(container.firstChild).toHaveClass("app");
  expect(container.firstChild.childNodes[0]).toHaveClass("bg");
  expect(container.firstChild.childNodes[1]).toHaveClass("header");
  expect(container.firstChild.childNodes[2]).toHaveClass("loader fullscreen");
});