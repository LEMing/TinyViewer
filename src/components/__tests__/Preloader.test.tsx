import {render, screen} from '@testing-library/react';
import Preloader from '../Preloader';
import '@testing-library/jest-dom';

test('Should render Spinner component', () => {
  render(<Preloader msg='Loading...'/>);
  const preloader = screen.getByText('Loading...');
  expect(preloader).toBeInTheDocument();
});
