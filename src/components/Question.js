import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isAnswerDisplayed = this.props.isAnswerDisplayed;

    let answer = null;
    let button_class = "fa fa-plus-square";

    let buttonClick = () =>
     this.props.onClickFunction(this.props.data.id);

    if (isAnswerDisplayed) {
      answer = <div>{this.props.data.answer}</div>
      button_class = "fa fa-minus-square"
    }

    let button = <i onClick={buttonClick} className={button_class}/>

    return (
        <div id={this.props.data.id} className="faq">
          <div className="button">
            {button}
          </div>

          <div className="question">
            <h2>{this.props.data.question}</h2>
          </div>
          {answer}
        </div>

    );
  }

}

export default Question;
