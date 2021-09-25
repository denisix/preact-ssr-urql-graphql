import { h } from 'preact'
import { Router } from 'preact-router'

import Header from './components/header'

import Home from './routes/home'
import Profile from './routes/profile'
import Contacts from './routes/contacts'

const App = ({ url }) => {
  console.log('- App')

  return (
    <div id="app">
      <Header />
      <Router url={url}>
        <Home path="/" />
        <Profile path="/profile" user="me" />
        <Profile path="/profile/:user" />
        <Contacts path="/contacts" />
      </Router>
    </div>
  )


}

export default App