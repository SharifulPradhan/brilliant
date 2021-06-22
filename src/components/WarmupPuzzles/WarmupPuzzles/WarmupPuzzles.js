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


const WarmupPuzzles = () => {
  const [answers, setanswers] = React.useState([]);
  const [modalShow, setModalShow] = React.useState(false);
  console.log(answers)

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
    else{
      alert('Wrong Answer')
    }
  }


  return (
    <div>
      <Header />
      <div className="row mt-5">
        <div className="col-3" style={{ textAlign: 'right', height: '1000px', backgroundColor: "black" }}>
          <Link to="/" className="nav-link text-secondary mt-5 me-5"> <span>&#60;</span> Back</Link>
          <p className='nav-link text-secondary me-5'>Logic</p>
        </div>

        {/* course quiz details */}
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

          <div>
            <div className="flexbox">
              <QuizBoard id="younger" className="board" onImageDrop={setanswers} />
              <QuizBoard id="middle" className="board" onImageDrop={setanswers} />
              <QuizBoard id="older" className="board" onImageDrop={setanswers} />
            </div>

            <div className="flexbox">
              <Board id="board-1" className="board">
                <Cards id="joseph" className="cards" draggable="true">
                  <img src={joseph} alt="" width="150px" draggable="false" />
                </Cards>
              </Board>
              <Board id="board-2" className="board">
                <Cards id="kevin" className="cards" draggable="true">
                  <img src={kevin} alt="" width="150px" draggable="false" />
                </Cards>
              </Board>
              <Board id="board-3" className="board">
                <Cards id="nicholas" className="cards" draggable="true">
                  <img src={nicholas} alt="" width="150px" draggable="false" />
                </Cards>
              </Board>
            </div>
            <button onClick={onanswerSubmit} className="btn-blue">Submit answer</button>
          </div>
        </div>

        <div className="col-4 mt-5">
          <p>Lesson 1 </p>
          <h4>WARMUP PUZZLES</h4>
          <button className="btn-blue">Next Question</button>
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