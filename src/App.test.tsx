import { render, screen } from '@testing-library/react';
import App from './App';

describe('test app', () => {
  test('app rendering', async () => {
    render(<App />);

    expect(await screen.findByText('tigerlily')).toBeInTheDocument();
  });
});
