import React from 'react';
import Header from '../../SharedComponents/Header/Header';
import { Link } from 'react-router-dom';
import QuizBoard from '../QuizBoard/QuizBoard';
import Board from '../Board/Board';
import Cards from '../Cards/Cards';
import nicholas from '../../../images/nicholas.png'
import joseph from '../../../images/joseph.png'
import kevin from '../../../images/kevin.png'
import './WarmupPuzzles.css'
import AnswerModal from '../AnswerModal/AnswerModal';
import questionsData from '../../../data/questions.json'
import quiz2 from '../../../images/lying-test.png'
import quizDifficulty from '../../../images/quiz-difficulty.png'


const WarmupPuzzles = () => {
  const [questions, setQuestions] = React.useState([]);
  const [answers, setAnswers] = React.useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  console.log(answers)

  console.log(questions[currentQuestion]?.choices)
  React.useEffect(() => {
    setQuestions(questionsData);
  }, [])

  const onanswerSubmit = () => {
    if (answers.length === 3) {
      const valueArr = answers.map(item => item.cards_id);
      const isDuplicate = valueArr.some((item, idx) => valueArr.indexOf(item) !== idx);
      console.log(isDuplicate)
      if (!isDuplicate) {
        setModalShow(true)
      }
      else {
        alert('Wrong Answer')
      }
    }
    if (answers === 'White') {
      setModalShow(true)
    }
    else {
      alert('Wrong Answer')
    }

  }

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    setCurrentQuestion(nextQuestion);
  }

  const changeHandler = (e) => {
    const quiz2Anwser = e.target.value;
    setAnswers(quiz2Anwser)
  }

  return (
    <div>
      <Header />
      <div className="row mt-5">
        <div className="col-3" style={{ textAlign: 'right', height: '1000px', backgroundColor: "black" }}>
          <Link to="/" className="nav-link text-secondary mt-5 me-5"> <span>&#60;</span> Back</Link>
          <p className='nav-link text-secondary me-5'>Logic</p>
        </div>

        {/* course quiz1 details 
        ===============================================================================
        ===============================================================================
        */}
        {currentQuestion === 0 &&
          <div className="col-5 mt-5">
            <div>
              <p>Joseph, Kevin, and Nicholas are 3 brothers, and the following statements about them are all true:</p>
              <ul>
                <li><img src={joseph} alt="" width="50px" />Joseph is not the youngest.</li>
                <li><img src={kevin} alt="" width="50px" />Kevin is the oldest.</li>
                <li><img src={nicholas} alt="" width="50px" />Nicholas is not the oldest.</li>
              </ul>
              <p>Drag the characters into the dotted boxes</p>
            </div>


            {/* course quiz options 
            ===============================================================================
            ===============================================================================
            */}
            <div>
              <div className="flexbox">

                {
                  questions[0]?.questionID.map(quiz => <QuizBoard id={quiz} className="board" onImageDrop={setAnswers} />)
                }
              </div>

              <div className="flexbox">
                {
                  questions[0]?.choices.map(choice => <Board id={choice.boardID} className="board">
                    <Cards id={choice.cardsID} className="cards" draggable="true">
                      <img src={choice.image} alt="" width="150px" draggable="false" />
                    </Cards>
                  </Board>)
                }
              </div>
              <button onClick={onanswerSubmit} className="btn-blue">Submit answer</button>
            </div>
          </div>
        }

        {/* course quiz2 details
        ===============================================================================
        ===============================================================================
        */}
        {currentQuestion === 1 &&
          <div className="col-4 mt-5">
            <div className="d-flex flex-column align-items-center">
              <div>
                <img src={quiz2} alt="" width="450px" />
              </div>
              <div>
                <p>One of the women above is named Kaylee and the other is named Inara. They each make a statement about who they are as shown.</p>
                <p>We know that <strong>at least one of them is lying.</strong> What color is Inara's dress?</p>
              </div>
            </div>
          </div>
        }

        {/* course quiz difficulties details
        ===============================================================================
        ===============================================================================
        */}
        {currentQuestion === 2 &&
          <div className="col-4 mt-5">
            <div className="d-flex flex-column align-items-center">
              <div>
                <img src={quizDifficulty} alt="" width="450px" />
              </div>
              <div>
                <p>The next three problems gradually increase in difficulty, and all of them are more challenging than the warm-ups you just solved.</p>
                <p>It's worth the effort. The most effective learning experiences are often those times when you get a problem wrong, and then challenge yourself to read, understand, and learn from the solution.</p>
              </div>
            </div>
          </div>
        }

        {/* course quiz3 details 
        ===============================================================================
        ===============================================================================
        */}
        {currentQuestion === 3 &&
          <div className="col-5 mt-5">
            <div>
              <p>Joseph, Kevin, and Nicholas are 3 brothers, and the following statements about them are all true:</p>
              <ul>
                <li><img src={joseph} alt="" width="50px" />Joseph is not the youngest.</li>
                <li><img src={kevin} alt="" width="50px" />Kevin is the oldest.</li>
                <li><img src={nicholas} alt="" width="50px" />Nicholas is not the oldest.</li>
              </ul>
              <p>Drag the characters into the dotted boxes</p>
            </div>


            {/* course quiz options 
            ===============================================================================
            ===============================================================================
            */}
            <div>
              <div className="flexbox">

                {
                  questions[0]?.questionID.map(quiz => <QuizBoard id={quiz} className="board" onImageDrop={setAnswers} />)
                }
              </div>

              <div className="flexbox">
                {
                  questions[0]?.choices.map(choice => <Board id={choice.boardID} className="board">
                    <Cards id={choice.cardsID} className="cards" draggable="true">
                      <img src={choice.image} alt="" width="150px" draggable="false" />
                    </Cards>
                  </Board>)
                }
              </div>
              <button onClick={onanswerSubmit} className="btn-blue">Submit answer</button>
            </div>
          </div>
        }


        <div className="col-4 mt-5">
          <div>
            <p>Lesson 1 </p>
            <h4>WARMUP PUZZLES</h4>
          </div>
          {currentQuestion === 1 &&
            <div style={{ fontSize: '18px', fontWeight: 'bold' }}>
              <div class="form-check p-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={changeHandler} value="Black" />
                <label class="form-check-label" for="flexRadioDefault1">
                  Black
                </label>
              </div>
              <div class="form-check p-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={changeHandler} value="White" />
                <label class="form-check-label" for="flexRadioDefault2">
                  White
                </label>
              </div>
              <div class="form-check p-2">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={changeHandler} value="There isn't enough information to be certain" />
                <label class="form-check-label" for="flexRadioDefault2">
                  There isn't enough information to be certain
                </label>
                <button onClick={onanswerSubmit} className="btn-blue bg-dark w-50">Submit answer</button>
              </div>
            </div>
          }
          <button className="btn-blue" onClick={handleNextQuestion}>Next Question</button>
          <AnswerModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default WarmupPuzzles;