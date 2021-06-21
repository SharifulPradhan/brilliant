import React from 'react';
import Header from '../../SharedComponents/Header/Header';
import { Link } from 'react-router-dom';
import Board from '../Board/Board';
import Cards from '../Cards/Cards';
import img1 from '../../../images/figure1.png'
import img2 from '../../../images/joshep.png'
import img3 from '../../../images/kevin.png'
import './WarmupPuzzles.css'


const WarmupPuzzles = () => {
  return (
    <div>
      <Header />
      <div className="row mt-5">
        <div className="col-3" style={{ textAlign: 'right', height: '1000px',backgroundColor: "black" }}>
          <Link to="/" className="nav-link text-secondary mt-5 me-5"> <span>&#60;</span> Back</Link>
          <p className='nav-link text-secondary me-5'>Logic</p>
        </div>

        {/* course quiz details */}
        <div className="col-5 mt-5">
          <div>
            <p>Joseph, Kevin, and Nicholas are 3 brothers, and the following statements about them are all true:</p>
            <ul>
              <li>Joseph is not the youngest.</li>
              <li>Kevin is the oldest.</li>
              <li>Nicholas is not the oldest.</li>
            </ul>
            <p>Drag the characters into the dotted boxes</p>
          </div>

          <div className="d-flex flex-column">
            <div className="flexbox">
              <Board id="board-1" className="board">
                <Cards id="cards-1" className="cards" draggable="true">
                  <img src={img1} alt="" width="150px" draggable="false" />
                </Cards>
              </Board>
              <Board id="board-2" className="board">

              </Board>
            </div>

            <div className="flexbox">
              <Board id="board-3" className="board">
                <Cards id="cards-2" className="cards" draggable="true">
                  <img src={img2} alt="" width="150px" draggable="false" />
                </Cards>
              </Board>
              <Board id="board-4" className="board">

              </Board>
            </div>

            <div className="flexbox">
              <Board id="board-5" className="board">
                <Cards id="cards-3" className="cards" draggable="true">
                  <img src={img3} alt="" width="150px" draggable="false" />
                </Cards>
              </Board>
              <Board id="board-6" className="board" />
            </div>
          </div>
        </div>

        <div className="col-4 mt-5">
          <p>Lesson 1 </p>
          <h4>WARMUP PUZZLES</h4>

        </div>
      </div>
    </div>
  );
};

export default WarmupPuzzles;