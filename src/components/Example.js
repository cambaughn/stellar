/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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

// ---------- OR ----------

/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

const styles = {
  container: {

  },
}

export default Example;
