import { render, getByText } from '@testing-library/react';
import ErrorMessage from '../ErrorMessage';
import '@testing-library/jest-dom';

describe('ErrorMessage', () => {
  it('should render the given message', () => {
    const message = 'An error occurred';
    const { container } = render(<ErrorMessage msg={message} />);
    const msgElement = getByText(container, message)
    expect(msgElement).toBeInTheDocument();
  });

  it('should console.debug the given debugDetails', () => {
    const message = 'An error occurred';
    const debugDetails = 'This is a debug message';
    jest.spyOn(console, 'debug');
    render(<ErrorMessage msg={message} debugDetails={debugDetails} />);
    expect(console.debug).toHaveBeenCalledWith(debugDetails);
  });
});
