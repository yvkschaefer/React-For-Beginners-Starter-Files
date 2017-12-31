import React from 'react'
import { render } from 'react-dom' //the curly braces import just one method from react-dom. so don't have to put:
//import ReactDOM from 'react-dom' . because we don't need the whole react-dom package. in this case we just want that one method.
import { BrowserRouter, Match, Miss } from 'react-router'

import './css/style.css'
import App from './components/App'
import NotFound from './components/NotFound'
import StorePicker from './components/StorePicker'
//if you had put
//import StorePicker from 'StorePicker'
//if it's just a string, webpack thinks that you look in the node_modules directory.

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker} />
        <Match pattern="/store/:storeId" component={App} />
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}

render(<Root />, document.querySelector('#main'))

//JSX allows you to write html inside javascript
