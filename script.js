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
    return {fillLayout, gameLayout};
})();

const flowControl = (() => {
    const checkWinner = (player) => {
        
    };
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
                player = "O";
            }
            else if(player == "O"){
                if(gameBoard.gameLayout[box.id[0]][box.id[2]] == ""){
                    gameBoard.gameLayout[box.id[0]][box.id[2]] = "O";
                }
                player = "X";
            }
            gameBoard.fillLayout();
            // movesTotal++;
            // movesTotal == 9? alert("It's a draw"): flowControl.checkWinner(player);
        })
    })
    return {player};
}
)();
