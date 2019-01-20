import React, {Component} from 'react'
import {ThemeProvider} from 'emotion-theming'
import {Text} from '@rebass/emotion'

import PrimaryButton from './components/primaryButton'

import theme from './theme'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <Text>Sign up for some awesome hockey.</Text>
            <PrimaryButton>Sign up</PrimaryButton>
          </header>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
