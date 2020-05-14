import React from 'react'
import GlobalStyles from './GlobalStyle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import Card from './Card'
import Form from './Form'
import AddButton from './AddButton'
import EditForm from './EditForm'

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
        <Route path="/edit/:id">
          <EditForm />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
