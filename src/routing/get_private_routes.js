import { Route } from 'react-router-dom'
import { getAllowedRoutes } from '../utils'

const getPrivateRoutes = (appRoutes, props) => {
  const routes = getAllowedRoutes(appRoutes).map((route) => {
    const { path, component: Component, children, title, permission, ...rest } = route

    return (
      <Route {...rest} {...props} key={path} path={`${path}`}>
        <Component children={children} {...props} />
      </Route>
    )
  })

  return routes
}

export default getPrivateRoutes
