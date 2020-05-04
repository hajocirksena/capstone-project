import React from 'react'
import GlobalStyles from './GlobalStyle'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Card from './Card'
import Header from './Header'
import Formular from './Formular'
import AddButton from './AddButton'

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
        <Route path="/formular">
          <Formular />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
