import React from 'react' //have to do this at the top in every single component. Not like jQuery where you load it on the page and it's available to everyone. With ES6 modules if you need something within a JS module, you have to import it in every single file that you need it

class StorePicker extends React.Component {
  //uses a capital on the component, StorePicker not storePicker because it can be used more than once ....
  render() {
    return (
      <form className="store-selector">
        {/*Hello */}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker
