/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
// Note: test renderer must be required after react-native.

describe('workshop test suites', () => {
  it('renders welcome screen', async () => {
    const {getByText} = render(<App />);

    // verifying join our school text on landing page
    const joinOurSchoolText = getByText('Join Our School');
    expect(joinOurSchoolText).toBeDefined();
  });

  it('renders register screen', async () => {
    const {getByText} = render(<App />);

    // firing button press event on welcome screen to navigate to register screen
    const button = getByText('Join Our School');
    fireEvent.press(button);

    await waitFor(() => expect(getByText('Continue')).toBeDefined());
  });
});
