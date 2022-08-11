import { intersection } from 'lodash'
import moment from 'moment'

export function isLoggedIn() {
  const currentTime = moment.now()
  const expirationTime = localStorage.getItem('expirationTime') || 0
  return currentTime < expirationTime
}

export function isArrayWithLength(arr) {
  return Array.isArray(arr) && arr.length
}

export function getAllowedRoutes(routes) {
  const roles = JSON.parse(localStorage.getItem('roles'))
  return routes.filter(({ permission }) => {
    if (!permission) return true
    else if (!isArrayWithLength(permission)) return true
    else return intersection(permission, roles).length
  })
}
