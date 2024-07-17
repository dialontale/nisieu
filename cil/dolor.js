return {
  name: this.props.app.state.subcategory, // Assigns the value of this.props.app.state.subcategory to the key "name"
  func: function () { // Defines a function and assigns it to the key "func"
    setView({ navbarMode: "subcategory", category: category, subcategory: subcategory }) // Calls the setView function with an object as an argument
  }
};
