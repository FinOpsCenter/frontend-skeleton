import ActualsRepo from './Actuals/repo/actuals_repo'

function RepoFactory() {
  this.actualsRepo = () => new ActualsRepo()
  }

export default RepoFactory
