import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'


function Square(props) {
    return (
        <button
            className="square"
            onClick={props.onClick}>
            {props.value}
        </button>
    )
}

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares : Array(9).fill(null),
            xIsNext: true,
        };
    }

    handleClick(i){
        // console.log(this.state.squares);
        const squares = this.state.squares.slice(); // 복사

        // 누군가가 승리하거나 Square가 이미 채워졌다면 Board의 handleClick 함수가 클릭을 무시
        if (calculateWinner(squares) || squares[i]){
            return;
        }

        squares[i] = this.state.xIsNext ? 'X': 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i) {
        return (
        <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />
        );
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner){
            status = "Winner: " + winner
        }
        else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X': 'O');
        }

        return (
            <>
                <h1 className="status">{status}</h1>
                <div className='board'>
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
                
            </>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], // 가로 1번째 줄
        [3, 4, 5], // 가로 2번째 줄
        [6, 7, 8], // 가로 3번째 줄
        [0, 3, 6], // 세로 1번째 줄
        [1, 4, 7], // 세로 2번째 줄
        [2, 5, 8], // 세로 3번째 줄
        [0, 4, 8], // 대각선 \
        [2, 4, 6], // 대각선 /
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
