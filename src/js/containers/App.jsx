import React, {Component} from 'react';
import Question from '../components/Question';

class App extends Component {
  state = {
    currentQuestion: 0,
    questions: [
      {
        questionNr: 0,
        question: `wat zijn de 3 primaire kleuren?`,
        chooseFrom: [
          {
            id: 1,
            answer: `rood, geel, bordeaux`,
            correct: false
          },
          {
            id: 2,
            answer: `rood, groen, bordeaux`,
            correct: false
          },
          {
            id: 3,
            answer: `rood, groen, blauw`,
            correct: true
          }
        ]
      },
      {
        questionNr: 1,
        question: `wie is michael jackson?`,
        chooseFrom: [
          {
            id: 1,
            answer: `king of crocs`,
            correct: false
          },
          {
            id: 2,
            answer: `king of pop`,
            correct: true
          },
          {
            id: 3,
            answer: `queen of baggels`,
            correct: false
          }
        ]
      }
    ]
  };

  handleQuestionChange(e) {
    const {currentQuestion} = this.state;
    // const {questions} = this.state;
    const answer = e.currentTarget;

    if (answer.value === `true`) {
      answer.parentNode.classList.add(`answerIsTrue`);
    } else {
      answer.parentNode.classList.add(`answerIsFalse`);
    }
    setTimeout(() => {
      this.clearAnswer(currentQuestion, answer);
    }, 1000);
  }

  clearAnswer(currentQuestion, answer) {
    if (answer.parentNode.classList.contains(`answerIsTrue`)) {
      answer.parentNode.classList.remove(`answerIsTrue`);
    }
    answer.checked = false;
    this.setState({currentQuestion: currentQuestion += 1});
  }

  renderQuestion() {
    const {currentQuestion} = this.state;
    const {questions} = this.state;

    if (currentQuestion !== questions.length) {
      return <Question questions={questions} currentQuestion={currentQuestion} onQuestionAnswered={this.handleQuestionChange.bind(this)} />;
    } else {
      return <h1>Bedankt voor het spelen</h1>;
    }
  }

  render() {
    return (
      <section>
        <header>
          {this.renderQuestion()}
        </header>
      </section>
    );
  }
}

export default App;
