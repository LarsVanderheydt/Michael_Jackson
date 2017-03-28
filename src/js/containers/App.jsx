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
        question: `Wat is je etnische achtergrond?`,
        chooseFrom: [
          {
            id: 1,
            answer: `Zwart`,
            answerScore: 1
          },
          {
            id: 2,
            answer: `Blank`,
            answerScore: 2
          },
          {
            id: 3,
            answer: `It doesn’t matter if you’re black or white`,
            answerScore: 5
          }
        ]
      },
      {
        questionNr: 1,
        question: `Naar welke frisdrank gaat je voorkeur uit?`,
        chooseFrom: [
          {
            id: 1,
            answer: `Cola`,
            answerScore: 3
          },
          {
            id: 2,
            answer: `Pepsi`,
            answerScore: 4
          },
          {
            id: 3,
            answer: `Andere`,
            answerScore: 5
          }
        ]
      },
      {
        questionNr: 2,
        question: `Beantwoord deze vraag zo snel mogelijk: Als ik een dochter kreeg, dat koos ik voor de naam ...`,
        chooseFrom: [
          {
            id: 1,
            answer: `Paris`,
            answerScore: 6
          },
          {
            id: 2,
            answer: `Laquisha`,
            answerScore: 9
          },
          {
            id: 3,
            answer: `Chantal`,
            answerScore: 5
          }
        ]
      },
      {
        questionNr: 3,
        question: `Mijn favoriete huisdier:`,
        chooseFrom: [
          {
            id: 1,
            answer: `Niets gaat boven de liefde van een hond.`,
            answerScore: 6
          },
          {
            id: 2,
            answer: `Sowieso een aap! Of nee, een tijger! Of een giraf, papegaai, olifant, enkele flamingo’s, reptielen en gooi er nog maar een vogelspin bij ook.`,
            answerScore: 9
          },
          {
            id: 3,
            answer: `Toch liever een huiskat.`,
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
