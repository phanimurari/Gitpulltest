import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {input1: '', input2: '', stateO: false, stateT: false}

  onSubmitingForm = () => {
    const {input1, input2} = this.state
    if (input1 === '') {
      this.setState({stateO: true})
    }
    if (input2 === '') {
      this.setState({stateT: true})
    }
  }

  onChangeInputOne = event => {
    this.setState({input1: event.target.value})
  }

  onChangeInputTwo = event => {
    this.setState({input2: event.target.value})
  }

  render() {
    const {input1, input2, stateO, stateT} = this.state
    const class1 = stateO ? 'redColor' : 'inputElement'
    const class2 = stateT ? 'redColor' : 'inputElement'

    return (
      <div className="Container">
        <h1>Registration</h1>
        <form className="sub-Container" onSubmit={this.onSubmitingForm}>
          <div>
            <label htmlFor="firstName">FIRST NAME</label>
            <br />
            <input
              id="firstName"
              type="text"
              value={input1}
              className={class1}
              onBlur={this.onChangeInputOne}
            />
            {stateO && <p>Required</p>}
          </div>
          <div>
            <label htmlFor="SecondName">SECOND NAME</label>
            <br />
            <input
              id="SecondName"
              type="text"
              value={input2}
              className={class2}
              onClick={this.onChangeInputTwo}
            />
            {stateT && <p>Required</p>}
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
