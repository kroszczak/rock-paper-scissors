
let move = ['',''];
const player1 = [65, 83, 68];
const player2 = [74, 75, 76];
const moves = [65, 75, 68, 74, 83, 76, 65];

document.addEventListener('keydown', (b) =>{
    
    if(player1.includes(b.keyCode) && move[0] === '')
    {   
        console.log("gracz UNO");
        move[0] = b.keyCode;
        if(move[1] !== '') battle();
    }
    else if(player2.includes(b.keyCode) && move[1] === ''){
    
        console.log("gracz DOS");
        move[1] = b.keyCode;
        if(move[0] !== '') battle();     
    }

})

function battle(){

    if(moves[moves.findIndex((e) => {return e === move[0];}) + 1] === move[1]){
        console.log("lewy wygrywa");
        document.querySelectorAll('.counter')[0].innerHTML += ".";
        document.querySelector('#mark').innerHTML = ">";
    }
    else if(moves[moves.findIndex((e) => {return e === move[1];}) + 1] === move[0]){
        console.log("prawy wygrywa");
        document.querySelectorAll(".counter")[1].innerHTML += ".";
        document.querySelector('#mark').innerHTML = "<";
    }
    else {console.log("DRAW"); document.querySelector('#mark').innerHTML = "=";}

        
      document.querySelectorAll('.display').forEach( (item, index) =>{
          x = `<img src = "images/${(move[index] == 65 || move[index] == 74) ? "paper.png" : ((move[index] == 75 || move[index] == 83) ? "rock.png" : "scissors.png")}" />`;
          document.querySelectorAll('.display')[index].innerHTML = x;
          
      });
    move[0] = '', move[1] = '';
}
//a 65 - papier1
//k 75 - kamien2
//d 68 - nozyce1
//j 74 - papier2
//s 83 - kamien1
//l 76 - nozyce2







