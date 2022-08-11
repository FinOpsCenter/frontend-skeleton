const getActualsForUser = ({ year, token }, { observer, actualsRepo }) => {
  actualsRepo.getActuals(
    { year, token },
    {
      success: (response) => {
        if (response.error) {
          observer.errorReceivingActuals()
          return
        }

        observer.receiveActuals({
          actuals: response.data
        })
      },
      failure: () => {
        observer.errorReceivingActuals()
      }
    }
  )
}

export default getActualsForUser
