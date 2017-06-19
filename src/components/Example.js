/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';


const Example = () => {
  return (
    <div></div>
  )
}


const styles = {
  container: {

  },
}

export default Example;

// OR

class Example extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Example;
