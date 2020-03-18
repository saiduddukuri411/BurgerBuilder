import React, { Component } from 'react';
import Burgerbuilder from './containers/burgerbuilder/burgerbuilder'
import Layout from './hoc/layout/layout'

class App extends Component {
  render() {
    return (
      <div>
            <Layout>
                 <Burgerbuilder />
            </Layout>
      </div>
    );
  }
}

export default App;
