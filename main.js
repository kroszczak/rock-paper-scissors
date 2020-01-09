
let players = [
    player1 = {
        name: 'gracz 1', 
        pmoves: [65, 83, 68], 
        move : '', pts: 0 },  

    player2 = {
        name: 'gracz 2',
        pmoves: [74, 75, 76], 
        move: '', pts: 0}
    ];
const moves = [65, 75, 68, 74, 83, 76, 65];
let display = document.querySelectorAll('.display');
let counter = document.querySelectorAll('.counter');
let cntnt = [];
cntnt[0] = display[0].innerHTML;
cntnt[1] = display[1].innerHTML;

document.addEventListener('keydown', (b) =>{
    
    if(player1.pmoves.includes(b.keyCode) && player1.move === ''){  

        player1.move = b.keyCode;
        battle();
    }
    else if(player2.pmoves.includes(b.keyCode) && player2.move === ''){

        player2.move = b.keyCode;
        battle();     
    }else if(b.keyCode === 82) reset();

})


function battle(){

    if((player1.move !== '') && (player2.move !== '')){

        if(moves[moves.findIndex((move) => {return move === player1.move;}) + 1] === player2.move){

            player1.pts++;
            counter[0].innerHTML += ".";
            document.querySelector('#mark').innerHTML = ">";
        }
        else if(moves[moves.findIndex((move) => {return move === player2.move;}) + 1] === player1.move){

            player2.pts++;
            counter[1].innerHTML += ".";
            document.querySelector('#mark').innerHTML = "<";
        }
        else {  document.querySelector('#mark').innerHTML = "=";}
        

        display.forEach( (item, index) =>{
            x = `<img src = "images/${(players[index].move == 65 || players[index].move  == 74) ? "paper.png" : ((players[index].move  == 75 || players[index].move  == 83) ? "rock.png" : "scissors.png")}" />`;
            display[index].innerHTML = x;
        });

        if(player1.pts == 5){ win(player1.name);}
        else if(player2.pts == 5){win(player2.name);}
        else{ player1.move = ''; player2.move = '';}
        
    }
}

function win(x){
    document.querySelector('#mark ').style.fontSize = `3.4rem` 
    document.querySelector('#mark ').innerHTML = `${x} wygrywa` 
}

function reset(){

    document.querySelector('#mark').innerHTML = '';
    document.querySelector('#mark ').style.fontSize = `30rem` 
    counter.forEach((item, i) => {
        display[i].innerHTML = cntnt[i];
        counter[i].innerHTML = '';
        players[i].move = '';
        players[i].pts = 0;
    })
}




