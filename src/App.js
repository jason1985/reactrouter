import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import './App.css'

//927

function App() {
  return (
    <Router>
      <header className="header">
        <Header />
      </header>
      <main>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </main>
    </Router>
  )
}

export default App
