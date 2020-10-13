import React, { Component } from 'react'
import Form from './components/Form'
import './App.css'
import mad_image from './components/madlibs.png';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: null,
      random: 0
    }
  }

  // to get info from child back to parent
  handleFormSubmit = (newForm) => {
    //try to generate a random number and put in state
    let randomnum = 1 + (Math.floor(Math.random() * 3))
    this.setState({ random: randomnum })
    // get info and update form
    this.setState({ form: newForm })
  }

  // handleClear = () => {
  //   const { form } = this.state
  //   console.log("clearing!")
  //   this.setState({ form: null})
  // }

  render(){
    console.log(this.state.form) // check the value of userName here as it evolves
    console.log(this.state.random)
    return(
      <>
        <body>
          <div class="image_style">
            <img src={mad_image} aspectRatio={1/5} />
          </div>

          <div class="row">
            <div class="column">
              <Form
                handleFormSubmit={ this.handleFormSubmit }
              />
              <br />
            </div>

            <div class="column" id="answer_style">
              <br />
              { this.state.form && this.state.random === 1 &&
                <div>
                  I am a { this.state.form.firstNoun }. I can { this.state.form.firstVerb } very fast.  When I stay in the sun too long, my { this.state.form.firstAdjective } skin begins to peel.  My friend is a { this.state.form.lastNoun }.  We go to the park and { this.state.form.lastVerb } all the time.  It makes the day go by { this.state.form.lastAdjective }.
                </div>
              }
              { this.state.form && this.state.random === 2 &&
                <div>
                  I really like the { this.state.form.firstNoun }. He can { this.state.form.firstVerb } very fast.  When he runs in circles, my { this.state.form.firstAdjective } heart breaks.  He is kinda like a { this.state.form.lastNoun }.  We see him at the beach and { this.state.form.lastVerb } all the time.  He is the most { this.state.form.lastAdjective } one I know.
                </div>
              }
              { this.state.form && this.state.random === 3 &&
                <div>
                  Shes a lot like a { this.state.form.firstNoun }. She can { this.state.form.firstVerb } very fast.  When she wears yellow, my { this.state.form.firstAdjective } attitude is much better.  Her friend is a { this.state.form.lastNoun }.  They go to the mall and { this.state.form.lastVerb } all the time.  She is the best { this.state.form.lastAdjective } person I know.
                </div>
              }
            </div>
          </div>
        </body>
      </>
    )
  }
}

export default App
