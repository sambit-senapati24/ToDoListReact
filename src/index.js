import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import reducers from './reducers/combineReducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const reduxStore = createStore(reducers)
ReactDOM.render(
    <Router>
        <Provider store={reduxStore}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root'));

