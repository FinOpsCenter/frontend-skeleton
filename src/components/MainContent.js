import React, { memo } from 'react'
import { Switch } from 'react-router-dom'
import getPrivateRoutes from '../routing/get_private_routes'
import './main.scss'
import private_routes from '../config/private_routes'

function MainContent(props) {
  return (
    <main className="main">
      <Switch>
        {getPrivateRoutes(private_routes, props)}
      </Switch>
    </main>
  )
}

export default memo(MainContent)
