/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Template = () => {
  return (
    <div style={styles.container}>

    </div>
  )
}


const styles = {
  // CONTAINER ---------------------

  container: {

  },
}

export default Template;

// ---------- OR ----------

/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Template extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={styles.container}>

      </div>
    )
  }
}

const styles = {
  // CONTAINER ---------------------

  container: {

  },
}

export default Template;
