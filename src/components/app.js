/* Due to challenges this week, I discussed a lot with Matthew Goldstein and
 Alex Beals. Also, much code is pulled from examples from lectures and workshops
*/
import React, { Component } from 'react';
import NavBar from './navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
