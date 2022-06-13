import { render, screen } from '@testing-library/react';
import App from '../../App';

describe('test table', () => {

  test('displaying items’ properties', async () => {
    render(<App />);

    const thead: HTMLElement = await screen.findByTestId('table-thead-test');

    expect(thead).toHaveTextContent('name');
  });

  test('background color of each row should be taken from its color property', async () => {
    render(<App />);

    const rows: HTMLElement[] = await screen.findAllByTestId('table-row-test');

    expect(rows[2]).toHaveStyle('background-color: #BF1932');
  });

  test('displaying only 5 items per page', async () => {
    render(<App />);

    const rows: HTMLElement[] = await screen.findAllByTestId('table-row-test');

    expect(rows).toHaveLength(5);
  });
});
