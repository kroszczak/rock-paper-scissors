
let move1 = '', move2 = '';
const player1 = [65, 83, 68];
const player2 = [74, 75, 76];
const move = [65, 75, 68, 74, 83, 76, 65];
const obj= {
            'key65' : 1,
            'key75' : 2,
            'key68' : 3,
            'key74' : 4,
            'key83' : 5,
            'key76' : 6
            };
document.addEventListener('keydown', (b) =>{
    
    if(player1.includes(b.keyCode) && move1 === '')
    {   
        console.log("gracz UNO");
        move1 = b.keyCode;
        if(move2 !== '') battle();
        
    }
    else if(player2.includes(b.keyCode) && move2 === ''){
    
        console.log("gracz DOS");
        move2 = b.keyCode;
        if(move1 !== '') battle();
        
    }

})

function battle(){

    console.log("bitwa!");
    
    document.querySelectorAll('.display').forEach( (item, index) =>{

        if(move[move.findIndex(() => { return move1;}) + 1] == move2){
            console.log("lewy wygrywa");
        }
        else if(move[move.findIndex(() => { return move2;}) + 1] == move1){
            console.log("prawy wygrywa");
        }
        else {console.log("DRAW");}
        
        document.querySelectorAll('.display')[index].innerHTML = "mleko";
    });
    console.log("bitwa");
    move1 = '', move2 = '';
}
//a 65 - papier1
//k 75 - kamien2
//d 68 - nozyce1
//j 74 - papier2
//s 83 - kamien1
//l 76 - nozyce2







