import './App.css';
import '@fontsource/inter/variable.css';
import '@aws-amplify/ui-react/styles.css';

import { Authenticator, ThemeProvider } from '@aws-amplify/ui-react';

import { Auth } from 'aws-amplify';

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
      <Authenticator signUpAttributes={["nickname"]}>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user?.attributes?.nickname}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </ThemeProvider>
  )
}

export default App;
