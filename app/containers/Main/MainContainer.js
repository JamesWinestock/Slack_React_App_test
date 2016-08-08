import React from 'react'
import { HomeContainer} from 'containers'

const MainContainer = React.createClass({
  render () {
    return (
      <div>
      {this.props.children}
      </div>
    )
  }
})

export default MainContainer
