// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkMode: true,
  }

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  getButtonText = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'Light Mode' : 'Dark Mode'
  }

  onClickChangeHeadingColor = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'light-head' : 'dark-head'
  }

  onModeCardClassName = () => {
    const {isDarkMode} = this.state
    return isDarkMode ? 'dark-background' : 'light-background'
  }

  render() {
    const buttonText = this.getButtonText()
    const modeCardChange = this.onModeCardClassName()
    const changeHeading = this.onClickChangeHeadingColor()
    return (
      <div className="bg-container">
        <div className={`card-container ${modeCardChange}`}>
          <h1 className={`heading ${changeHeading}`}>Click To Change Mode</h1>
          <button className="button" type="button" onClick={this.onClickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
