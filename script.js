const gameBoard = (()=>{
    let gameLayout = [["","",""],["","",""],["","",""]];
    let magicSquare = [[2,7,6],[9,5,1],[4,3,8]];
    const fillLayout = () => {
        for(let i = 0; i < gameLayout.length; i++){
            let row = gameLayout[i];
            for(let j = 0; j < row.length; j++){
                document.getElementById(`${i}-${j}`).textContent = row[j];
            }
        }
    };
    return {fillLayout, gameLayout, magicSquare};
})();

const flowControl = (() => {
    let playerXPoints = 0;
    let playerOPoints = 0;
    const checkWinner = (player, position) => {
        if (player == "X"){
            playerXPoints += gameBoard.magicSquare[position[0]][position[2]];
            if (playerXPoints == 15){
                return "X";
            }
        }
        else if (player == "O"){
            playerOPoints += gameBoard.magicSquare[position[0]][position[2]];
            if (playerOPoints == 15){
                return "O";
            }
        }

    };

    const endGame = () =>{
        gameBoard.gameLayout = [["","",""],["","",""],["","",""]];
        playerOPoints = 0;
        playerXPoints = 0;
        gameBoard.fillLayout();
    }
    return {checkWinner, endGame};
}
)();

const displayControler = (() =>{
    let player = "X";
    let movesTotal = 0;
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("click", () =>{
            if(player == "X"){
                if(gameBoard.gameLayout[box.id[0]][box.id[2]] == ""){
                    gameBoard.gameLayout[box.id[0]][box.id[2]] = "X";
                }
                if (movesTotal == 9){ alert("It's a draw")}
                else{
                    if(flowControl.checkWinner(player, box.id) == "X"){
                        alert("X has won!")
                        flowControl.endGame();
                    }}
                player = "O";
            }
            else if(player == "O"){
                if(gameBoard.gameLayout[box.id[0]][box.id[2]] == ""){
                    gameBoard.gameLayout[box.id[0]][box.id[2]] = "O";
                }
                if (movesTotal == 9){ alert("It's a draw")}
                else{
                    if(flowControl.checkWinner(player, box.id) == "O"){
                        alert("O has won!")
                        flowControl.endGame();
                    }}
                player = "X";
            }
            gameBoard.fillLayout();
            movesTotal++;
        }, {once : true})
    })
    return {player};
}
)();
