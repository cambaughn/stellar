/*eslint no-use-before-define: "off"*/
/*eslint no-unused-vars: "off"*/
/*eslint-env es6*/

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import colors from '../util/design/colors.js';

class NavLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    }
  }

  render() {
    let linkText = this.state.hover ? {...styles.linkText, ...styles.hover} : styles.linkText;
    return (
      <div
        style={styles.linkWrapper}
      >
        <Link
          to={this.props.path}
          style={styles.link}
          onMouseEnter={() => this.setState({ hover: true })}
          onMouseLeave={() => this.setState({ hover: false })}
        >
          <p
            style={linkText}

          >
            {this.props.text}
          </p>
        </Link>
      </div>
    )
  }
}

const styles = {
  container: {

  },

  linkText: {
    color: colors.black,
    fontSize: '90%',
  },

  hover: {
    // height: 30,
    // borderBottom: `2px solid ${colors.black}`,
    color: 'black',

  },

  linkWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  link: {
    textDecoration: 'none',
    marginLeft: 20,
    marginRight: 20,
    cursor: 'pointer',
  }

}

export default NavLink;
