import Routes from '../routes'
import Budget from 'views/budget/Budget'

const private_routes = [
  {
    component: Budget,
    path: Routes.BUDGET.PATH,
    title: Routes.BUDGET.TITLE,
    exact: true,
    activePaths: [Routes.BUDGET.PATH],
    permission: Routes.BUDGET.PERMISSIONS
  }
]

export default private_routes
