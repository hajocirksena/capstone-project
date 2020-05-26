import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Card from './Card'
import Form from './Form'
import AddButton from './AddButton'
import LandingPage from './LandingPage'

function App() {
  return (
    <>
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
    </>
  )
}

export default App
