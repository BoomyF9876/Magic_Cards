import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders select card set text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Select a card set/i);
  expect(linkElement).toBeInTheDocument();
});
