import './App.css';

function App() {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  function clickhandler(e) {
    const space = e.target
    if ((space.classList[0] === "x-mark") || (space.classList[0] === "o-mark")) {
      return
    }
 
    const board = document.getElementById("board")  
    const currentPlayer = board.classList[1]      
    if (currentPlayer === "x-player") {
      markX(space, board)
      
    } else {
      markO(space, board)      
    }
  }

  function markX(space, board) {
    space.classList.remove("open")
    space.classList.add("x-mark")
    space.parentElement.classList.add("not-open")
    checkWin()
    board.classList.remove("x-player")
    board.classList.add("o-player")
    return
  }
  function markO(space, board) {
    space.classList.remove("open")
    space.classList.add("o-mark")
    space.parentElement.classList.add("not-open")
    checkWin()
    board.classList.remove("o-player")
    board.classList.add("x-player")
    return
  }

  function checkWin() {
    const allSpaces = document.querySelectorAll(".space")
    const message = document.getElementById("end-message")

    function draw() {
      return [...allSpaces].every(index => {
        if (index.classList[1] !== "space") {
          return true    
        }
      })
    } 
    const oWins = wins.some(combo => {
      return combo.every(index => {
        return allSpaces[index].classList.contains("o-mark")
      })
    })
    const xWins = wins.some(combo => {
      return combo.every(index => {
        return allSpaces[index].classList.contains("x-mark")
      })
    })

    const resetBtn = document.getElementById("resetBtn")
    console.log(resetBtn.classList)
    if (oWins) {
      message.innerHTML = "O Wins"
      resetBtn.classList.remove("hidden")
      console.log("O Wins")
    } else if (xWins) {
      message.innerHTML = "X Wins"
      resetBtn.classList.remove("hidden")
      console.log("X Wins")
    } else if (draw()) {
      message.innerHTML = "Draw"
      resetBtn.classList.remove("hidden")
      console.log("Draw")
    }
    return
  }
  function resetPage() {
    window.location.reload();
  }

  return (
    <div className="App">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="game o-player" id="board">
        <div className="box"><div className="open space" onClick={clickhandler}></div></div>
        <div className="box"><div className="open space" onClick={clickhandler}></div></div>
        <div className="box"><div className="open space" onClick={clickhandler}></div></div>
        <div className="box"><div className="open space" onClick={clickhandler}></div></div>
        <div className="box"><div className="open space" onClick={clickhandler}></div></div>
        <div className="box"><div className="open space" onClick={clickhandler}></div></div>
        <div className="box"><div className="open space" onClick={clickhandler}></div></div>
        <div className="box"><div className="open space" onClick={clickhandler}></div></div>
        <div className="box"><div className="open space" onClick={clickhandler}></div></div>
      </div>
      <h1 id="end-message"></h1>
      <button id="resetBtn" className="hidden" onClick={resetPage}>Reset</button>
    </div>
  );
}

export default App;
