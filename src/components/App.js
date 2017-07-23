import React from 'react';
import QuestionTable from './QuestionTable';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
      fetch('http://localhost:3000/api/v1/questions')
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
                error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(body => {
          let nextQuestions = body;
          this.setState({ data: nextQuestions });
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div>
        <h1>Launch Academy FAQ</h1>
        <QuestionTable questions={this.state.data} />
      </div>
    )
  }
}

export default App;
