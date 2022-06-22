/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
// Note: test renderer must be required after react-native.

it('renders correctly', async () => {
  const {getByTestId, getByText, queryByTestId} = render(<App />);

  // Expectation for Screen 1 - Welcome Screen
  const joinOurSchoolText = getByText('Join Our School');
  expect(joinOurSchoolText).toBeDefined();

  // Expectation for Screen 2 - Register Screen
  const button = getByText('Join Our School');
  fireEvent.press(button);

  await waitFor(() => expect(getByText('Continue')).toBeDefined());
});
