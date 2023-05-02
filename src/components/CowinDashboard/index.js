import {Component} from 'react'

import Loader from 'react-loader-spinner'

import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'

import './index.css'

const constants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  ongoing: 'ONGOING',
}

class CowinDashboard extends Component {
  state = {status: constants.initial, vaccineData: []}

  componentDidMount() {
    this.getvaccineData()
  }

  getvaccineData = async () => {
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination,

        vaccineByAge: data.vaccination_by_age,

        vaccineByGender: data.vaccination_by_gender,
      }
      this.setState({vaccineData: updatedData, status: constants.success})
    } else {
      this.setState({status: constants.failure})
    }
  }

  renderSuccessView = () => {
    const {vaccineData} = this.state
    return (
      <div>
        <VaccinationCoverage
          coverageDetails={vaccineData.last7DaysVaccination}
        />

        <VaccinationByGender genderDetails={vaccineData.vaccineByGender} />
        <VaccinationByAge ageDetails={vaccineData.vaccineByAge} />
      </div>
    )
  }

  renderFailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failimg"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  renderloaderView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  switchcaseCheck = () => {
    const {status} = this.state
    switch (status) {
      case constants.success:
        return this.renderSuccessView()
      case constants.failure:
        return this.renderFailureView()
      case constants.ongoing:
        return this.renderloaderView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg">
        <div className="logodiv">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="logo"
          />
          <p className="cowin">co-WIN</p>
        </div>

        <h1 className="para">CoWIN Vaccination in India</h1>
        <div>{this.switchcaseCheck()}</div>
      </div>
    )
  }
}

export default CowinDashboard
