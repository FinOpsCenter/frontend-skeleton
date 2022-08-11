import Routes from '../routes'
import Actuals from '../Actuals/components/Actuals'

const private_routes = [
  {
    component: Actuals,
    path: Routes.ACTUALS.PATH,
    title: Routes.ACTUALS.TITLE,
    exact: true,
    activePaths: [Routes.ACTUALS.PATH],
    permission: Routes.ACTUALS.PERMISSIONS
  }
]

export default private_routes
