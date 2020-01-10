import React from "react"
import PropTypes from "prop-types"
class App extends React.Component {
  render () {
    console.log(this.props)
    return (
      <React.Fragment>
        {/* {this.props.greeting} */}
      </React.Fragment>
    );
  }
}

// App.propTypes = {
export default App;
