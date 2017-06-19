import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import logo from '../../logo.svg'

class Header extends Component {
  render() {
    return (
      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div>
          <ul>
            <li><Link to='/'>Index</Link></li>
            <li><Link to='/new'>New</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
