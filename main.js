
let players = [player1 = {pmoves: [65, 83, 68], move : '' },  player2 = {pmoves: [74, 75, 76], move: ''}];
const moves = [65, 75, 68, 74, 83, 76, 65];
let display = document.querySelectorAll('.display');

document.addEventListener('keydown', (b) =>{
    
    if(player1.pmoves.includes(b.keyCode) && player1.move === ''){   
        player1.move = b.keyCode;
        battle();
    }
    else if(player2.pmoves.includes(b.keyCode) && player2.move === ''){
    
        player2.move = b.keyCode;
        battle();     
    }

})

function battle(){

    if(( player1.move !== '') && (player2.move !== '')){
        
        if(moves[moves.findIndex((move) => {return move === player1.move;}) + 1] === player2.move){
            document.querySelectorAll('.counter')[0].innerHTML += ".";
            document.querySelector('#mark').innerHTML = ">";
        }
        else if(moves[moves.findIndex((move) => {return move === player2.move;}) + 1] === player1.move){
            document.querySelectorAll(".counter")[1].innerHTML += ".";
            document.querySelector('#mark').innerHTML = "<";
        }
        else {
            document.querySelector('#mark').innerHTML = "=";
        }
            
        display.forEach( (item, index) =>{
            x = `<img src = "images/${(players[index].move == 65 || players[index].move  == 74) ? "paper.png" : ((players[index].move  == 75 || players[index].move  == 83) ? "rock.png" : "scissors.png")}" />`;

            display[index].innerHTML = x;
        });
        player1.move = '';
        player2.move = '';
    }
}







