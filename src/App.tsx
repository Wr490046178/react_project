import React, { Component } from 'react'
import RouterViews from './router/RouterViews'
import routerConfig from './router/routerConfig'
export default class App extends Component {
  render() {
    return (
      <div>
        <RouterViews routes={routerConfig}/>
      </div>
    )
  }
}
