import React,{useState} from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import AddToDo from './components/AddToDo'
import ListItem from './components/ListItem'

function App() {
  const [items,setItems] = useState([])
  const [names, setNames] = useState([])
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component = {() => <AddToDo names = {names} setNames = {setNames}/>}/>
        <Route exact path='/:index' component = {() => <ListItem items = {items} setItems = {setItems}/>}/>
      </Switch>
    </div>
  );
}

export default App;
