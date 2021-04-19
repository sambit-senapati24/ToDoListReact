import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import AddToDo from './components/AddToDo'
import ListItem from './components/ListItem'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component = {AddToDo}/>
        <Route exact path='/:index' component = {ListItem}/>
      </Switch>
    </div>
  );
}

export default App;
