import React from 'react';
import Question from './Question.js';

class QuestionTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedQuestionId: null }
    this.handleQuestionClick = this.handleQuestionClick.bind(this)
  }

  handleQuestionClick(id) {
    let selectedId = id;
    if(id == this.state.selectedQuestionId) {
      this.setState({ selectedQuestionId: null });
    } else {
      this.setState({ selectedQuestionId: id });
    }

  }

  renderQuestions(questions) {
      if (questions.length > 0) {
          return questions.map( (question) => {
            if( question.id == this.state.selectedQuestionId) {
              return(
                <Question
                key={question.id} data={question} onClickFunction={this.handleQuestionClick}
                isAnswerDisplayed={true}/>
              )
            } else {
              return(
                <Question
                key={question.id} data={question} onClickFunction={this.handleQuestionClick}
                isAnswerDisplayed={false}/>
              )
            }
          });
      }
      else return [];
  }

  render() {
    var rows = [];

    rows = this.renderQuestions(this.props.questions)

    return (
        <ul>{rows}</ul>
    );
  }
}

export default QuestionTable;
