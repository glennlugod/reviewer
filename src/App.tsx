import './App.css';
import '@fontsource/inter/variable.css';
import '@aws-amplify/ui-react/styles.css';
import {  } from '@aws-amplify/ui-react';

import { Authenticator, Button, ThemeProvider } from '@aws-amplify/ui-react';

import { Amplify } from 'aws-amplify';

const theme = {
  name: 'custom-button-theme',
  tokens: {
    components: {
      button: {
        // this will affect the font weight of all Buttons
        fontWeight: { value: '{fontWeights.black.value}' },
        // this will only style Buttons which are the "primary" variation
        primary: {
          backgroundColor: { value: 'rebeccapurple' },
          _hover: {
            backgroundColor: { value: 'hotpink' },
          },
        },
      },
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </ThemeProvider>
  )
}

export default App;
