import React from 'react'
import getActualsForUser from '../use-cases/get-actuals-for-user'
import AppContext from '../../context/AppContext'
import LoadingSpinner from '../../components/common/LoadingSpinner'
import './Actuals.scss'
import SemiCircularProgressBar from 'components/common/SemiCircularProgressBar/SemiCircularProgressBar'
// import TotalsGrid from './TotalsGrid'

const Actuals = () => {
  const { repoFactory, selectedYear } = React.useContext(AppContext)
  const [isLoading, setIsLoading] = React.useState(false)
  const [actualsData, setActualsData] = React.useState(null)

  React.useEffect(() => {
    setIsLoading(true)
    getActualsForUser(
      {
        year: selectedYear,
        token: localStorage.getItem('authToken')
      },
      {
        actualsRepo: repoFactory.actualsRepo(),
        observer: {
          receiveActuals: ({ actuals }) => {
            setActualsData(actuals)
            setIsLoading(false)
          },
          errorReceivingActuals: () => {
            setIsLoading(false)
            setActualsData(null)
          }
        }
      }
    )
  }, [selectedYear, repoFactory, setActualsData, setIsLoading])

  return (
    <div className="actuals">
      <h1 className="page-title">{`Company Product Manager`}</h1>
      {isLoading && <LoadingSpinner />}
      <div className="card p-5">
        <SemiCircularProgressBar percent={10} />
        <SemiCircularProgressBar percent={25} />
        <SemiCircularProgressBar percent={50} />
        <SemiCircularProgressBar percent={75} />
        <SemiCircularProgressBar percent={100} />
      </div>

      {/* <div className="actuals-data">{actualsData && <TotalsGrid actualsData={actualsData} year={selectedYear} />}</div> */}
    </div>
  )
}

export default Actuals
