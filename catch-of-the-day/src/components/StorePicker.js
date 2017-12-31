import React from 'react' //have to do this at the top in every single component. Not like jQuery where you load it on the page and it's available to everyone. With ES6 modules if you need something within a JS module, you have to import it in every single file that you need it
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  //uses a capital on the component, StorePicker not storePicker because it can be used more than once ....

  // constructor() {
  //   super()
  //   this.goToStore = this.goToStore.bind(this)
  // }

  goToStore(event) {
    event.preventDefault()

    //first grab the text from the box
    const storeId = this.storeInput.value

    //second we're going to transition from / to /store/:storeId
    this.context.router.transitionTo(`/store/${storeId}`)
  }

  render() {
    //this render is bound to the class that you are in. StorePicker
    return (
      // <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
      <form
        className="store-selector"
        onSubmit={e => {
          this.goToStore(e)
        }}
      >
        {/* this. is bound to StorePicker */}
        <h2>Please Enter A Store</h2>
        <input
          defaultValue={getFunName()}
          placeholder="Store Name"
          ref={input => {
            this.storeInput = input
          }}
          required
          type="text"
        />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker
