import React from 'react' //have to do this at the top in every single component. Not like jQuery where you load it on the page and it's available to everyone. With ES6 modules if you need something within a JS module, you have to import it in every single file that you need it
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'

class App extends React.Component {
  //uses a capital on the component, StorePicker not storePicker because it can be used more than once ....
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
}

export default App
