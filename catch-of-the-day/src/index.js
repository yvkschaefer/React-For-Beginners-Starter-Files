import React from 'react'
import { render } from 'react-dom' //the curly braces import just one method from react-dom. so don't have to put:
//import ReactDOM from 'react-dom' . because we don't need the whole react-dom package. in this case we just want that one method.
import './css/style.css'
import App from './components/App'
// import StorePicker from './components/StorePicker'
//if you had put
//import StorePicker from 'StorePicker'
//if it's just a string, webpack thinks that you look in the node_modules directory.

render(<App />, document.querySelector('#main'))

//JSX allows you to write html inside javascript
