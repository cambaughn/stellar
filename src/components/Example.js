/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Example = () => {
}

export default Example;


// OR

class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      example: ''
    }
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
