// // Import the Spinner component into this file and test
// // that it renders what it should for the different props it can take.
// test('sanity', () => {
//   expect(true).toBe(false)
// })

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner Component', () => {
  it('should render when "on" is true', () => {
    render(<Spinner on={true} />);
    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
  });
});