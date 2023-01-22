import {render, screen} from '@testing-library/react';
import Spinner from '../Spinner';
import '@testing-library/jest-dom';

test('Should render Spinner component', () => {
  render(<Spinner />);
  const spinner = screen.getByTestId('spinner-element');
  expect(spinner).toBeInTheDocument();
});
