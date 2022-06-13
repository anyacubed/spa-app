import { fireEvent, render, screen } from '@testing-library/react';
import App from '../../App';

describe('test input', () => {

  test('input allows filter items by id', async () => {
    render(<App />);

    const input: HTMLInputElement = await screen.findByTestId('input-test');

    fireEvent.change(input, {
      target: {value: 6},
    });

    expect(await screen.findByText('blue turquoise')).toBeInTheDocument();
  });
  
  test('only numbers acceptance', async () => {
    render(<App />);

    const input: HTMLInputElement = await screen.findByTestId('input-test');

    fireEvent.change(input, {
      target: {value: 'aqua'},
    });
    expect(await screen.findByText('Only numbers are acceptable')).toBeInTheDocument();
  });

  test('other signs should not even appear', async () => {
    render(<App />);

    const input: HTMLInputElement = await screen.findByTestId('input-test');

    expect(input.value).toBe('');
    fireEvent.change(input, {
      target: {value: 'aqua'},
    });
    expect(input.value).toBe('');
  });

  test('input focus', async () => {
    render(<App />);

    const input: HTMLInputElement = await screen.findByTestId('input-test');

    expect(input).toHaveFocus();
  });
});
