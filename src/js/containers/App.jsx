import React, {Component} from 'react';
import Question from '../components/Question';
import StartQuiz from '../components/StartQuiz';
import ScoreFeedback from '../components/ScoreFeedback';

let score = 0;

class App extends Component {
  state = {
    quizStarted: false,
    currentQuestion: 0,
    questions: [
      {
        questionNr: 0,
        question: `wat zijn de 3 primaire kleuren?`,
        chooseFrom: [
          {
            id: 1,
            answer: `rood, geel, bordeaux`,
            answerScore: 1
          },
          {
            id: 2,
            answer: `rood, groen, bordeaux`,
            answerScore: 2
          },
          {
            id: 3,
            answer: `rood, groen, blauw`,
            answerScore: 5
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
            answerScore: 3
          },
          {
            id: 2,
            answer: `king of pop`,
            answerScore: 4
          },
          {
            id: 3,
            answer: `queen of baggels`,
            answerScore: 5
          }
        ]
      }
    ]
  };

  handleQuestionChange(e) {
    const {currentQuestion} = this.state;
    const answer = e.currentTarget;

    score += parseInt(answer.value);

    setTimeout(() => {
      this.clearAnswer(currentQuestion, answer, score);
    }, 1000);
  }

  clearAnswer(currentQuestion, answer, score) {
    answer.checked = false;
    this.setState({currentQuestion: currentQuestion += 1, score});
  }

  scoreFeedback() {
    return <ScoreFeedback score={score} />;
  }

  renderQuestion() {
    const {currentQuestion} = this.state;
    const {questions} = this.state;

    if (currentQuestion !== questions.length) {
      return <Question questions={questions} currentQuestion={currentQuestion} onQuestionAnswered={this.handleQuestionChange.bind(this)} />;
    } else {
      return this.scoreFeedback();
    }
  }

  handleStartQuiz() {
    let {quizStarted} = this.state;
    quizStarted = true;
    this.setState({quizStarted});
  }

  startQuiz() {
    const {quizStarted} = this.state;
    if (quizStarted === false) {
      return (
        <StartQuiz clickedToStartQuiz={this.handleStartQuiz.bind(this)} />
      );
    } else {
      return this.renderQuestion();
    }
  }

  render() {
    return (
      <header className='quizDiv'>
        <h1 className='quizTitle'>How MJ are you?</h1>
        {this.startQuiz()}
      </header>
    );
  }
}

export default App;
