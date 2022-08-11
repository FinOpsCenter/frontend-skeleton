import React from 'react'
import { Container } from 'react-bootstrap'
import './App.scss'
import AppContext from './context/AppContext'
import Footer from './components/Footer/Footer'
import { withRouter } from 'react-router-dom'
import MainContent from './components/MainContent'
import 'react-datepicker/dist/react-datepicker.css'

const currentYear = new Date().getFullYear()
const availableYears = [currentYear - 3, currentYear - 2, currentYear - 1, currentYear, currentYear + 1]

const App = ({ repoFactory, location }) => {
  const [selectedYear, setSelectedYear] = React.useState(currentYear)


  return (
    <AppContext.Provider
      value={{ repoFactory, selectedYear, setSelectedYear, availableYears }}
    >
      <div className="App">
        <Container>
          <MainContent location={location} repoFactory={repoFactory} isAuthenticated={true} />
        </Container>
      </div>
      <Footer />
    </AppContext.Provider>
  )
}

export default withRouter(App)
