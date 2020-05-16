import React from 'react'
import GlobalStyles from './GlobalStyle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Card from './Card'
import Form from './Form'
import AddButton from './AddButton'
import LandingPage from './LandingPage'

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <Card />
          <AddButton />
        </Route>
        <Route path="/form">
          <Form />
        </Route>
        <Route path="/:id">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
