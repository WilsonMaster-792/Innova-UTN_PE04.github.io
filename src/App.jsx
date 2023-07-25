import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/home'
import Chat from './components/chat'
import './App.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Home></Home>
        <Route exact path="/" component={Home} />
        <Route exact path="/pages/chat.html" component={Chat} />
      </Switch>
    </Router>
  );
};

export default App;