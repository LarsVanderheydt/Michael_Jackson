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

  changeQuestion(e) {
    const {currentQuestion} = this.state;
    const answer = e.currentTarget;
    score += parseInt(answer.value);
    setTimeout(() => {
      this.clearAnswerButton(currentQuestion, answer, score);
    }, 500);
  }

  clearAnswerButton(currentQuestion, answer, score) {
    answer.checked = false;
    this.setState({currentQuestion: currentQuestion += 1, score});
  }

  renderQuestion() {
    const {currentQuestion} = this.state;
    const {questions} = this.state;

    if (currentQuestion !== questions.length) {
      return <Question questions={questions} currentQuestion={currentQuestion} onQuestionAnswered={this.changeQuestion.bind(this)} />;
    } else {
      return this.scoreFeedback();
    }
  }

  scoreFeedback() {
    return <ScoreFeedback score={score} />;
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

  handleStartQuiz() {
    this.setState({quizStarted: true});
  }

  render() {
    return (
      <header className='quiz_div'>
        <h1 className='quiz_title'>How MJ are you?</h1>
        {this.startQuiz()}
      </header>
    );
  }
}

export default App;
