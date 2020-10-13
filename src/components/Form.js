import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        firstNoun: "",
        firstVerb: "",
        firstAdjective: "",
        lastNoun: "",
        lastVerb: "",
        lastAdjective: ""
      }
    }
  }

  handleChange = (e) => {
    console.log(e.target.name)
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log("submitted!")
    this.props.handleFormSubmit(this.state.form)
  }

  handleClear = (e) => {
    const { form } = this.state
    e.preventDefault()
    console.log("clearing!")
    form.firstNoun = ""
    form.firstVerb = ""
    form.firstAdjective = ""
    form.lastNoun = ""
    form.lastVerb = ""
    form.lastAdjective = ""
    this.setState({ form: form })
    this.props.handleFormSubmit(null)
  }

  render(){
    // console.log(this.state.form)
    return(
      <>
        <h3></h3>
        <form>
          <label>Enter a noun: </label>
          <input
            id="word_box"
            name="firstNoun"
            type="text"
            value={ this.state.form.firstNoun }
            onChange={ this.handleChange }
          />
          <br />
          <br />
          <label>Enter a verb: </label>
          <input
            id="word_box"
            name="firstVerb"
            type="text"
            value={ this.state.form.firstVerb }
            onChange={ this.handleChange }
          />
          <br />
          <br />
          <label>Enter an Adjective: </label>
          <input
            id="word_box"
            name="firstAdjective"
            type="text"
            value={ this.state.form.firstAdjective }
            onChange={ this.handleChange }
          />
          <br />
          <br />
          <label>Enter a noun: </label>
          <input
            id="word_box"
            name="lastNoun"
            type="text"
            value={ this.state.form.lastNoun }
            onChange={ this.handleChange }
          />
          <br />
          <br />
          <label>Enter a verb: </label>
          <input
            id="word_box"
            name="lastVerb"
            type="text"
            value={ this.state.form.lastVerb }
            onChange={ this.handleChange }
          />
          <br />
          <br />
          <label>Enter an Adjective: </label>
          <input
            id="word_box"
            name="lastAdjective"
            type="text"
            value={ this.state.form.lastAdjective }
            onChange={ this.handleChange }
          />
          <br />
          <br />
          <input
            id="submit_button"
            type="submit"
            value=" Submit "
            onClick={ this.handleSubmit }
          />
          <input
            id="reset_button"
            type="submit"
            value=" Reset "
            onClick={ this.handleClear }
          />

        </form>
      </>
    )
  }
}

export default Form
