import React from 'react' //have to do this at the top in every single component. Not like jQuery where you load it on the page and it's available to everyone. With ES6 modules if you need something within a JS module, you have to import it in every single file that you need it
import Fish from './Fish'
import Header from './Header'
import Inventory from './Inventory'
import Order from './Order'
import sampleFishes from '../sample-fishes'

class App extends React.Component {
  //uses a capital on the component, StorePicker not storePicker because it can be used more than once ....
  constructor() {
    super()

    this.addFish = this.addFish.bind(this)
    this.addToOrder = this.addToOrder.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    //getInitialState
    this.state = {
      fishes: {},
      order: {}
    }
  }
  addFish(fish) {
    //update our state
    const fishes = {...this.state.fishes} //this is our existing fishes state. ... is a spread. it takes every item from our object, and spreads it into our object.
    //add in our new fish
    const timestamp = Date.now()
    fishes[`fish-${timestamp}`] = fish
    //set state
    this.setState({fishes}) //fishes in es6 same as fishes: fishes. vid 13 19min 20sec
  }

  addToOrder(key) {
    // take a copy of our state
    const order = {...this.state.order}
    // update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1
    // update our state
    this.setState({order})
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    })
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
}

export default App
