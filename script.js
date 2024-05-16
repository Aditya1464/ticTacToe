let container = document.querySelector('.container');
let box = document.querySelectorAll('.box');
let btn1 = document.querySelector('.button');
let player1 = document.querySelector('#player1');
let player2 = document.querySelector('#player2');
let rounds = document.querySelector('#rounds');
let startPage = document.querySelector('.startPage');
let score = document.querySelector('.score');
let name1 = document.querySelector('.name1');
let name2 = document.querySelector('.name2');
let Rounds = document.querySelector('.remaining');
let St = document.querySelector('.status');
let score1 = document.querySelector('.score1');
let score2 = document.querySelector('.score2');

let ch = 'X';
let count = 0;
let active = false;
let playerNo = 1;
let s1 = 0;
let s2 = 0;
let noOfRounds = 0;

btn1.addEventListener('click', function(){
    if(player1.value == '' || player2.value == ''){
        alert("Enter Players Name First! Please");
    }
    else if(rounds.value == ''){
        alert("Enter Number of Rounds! Please");
    }
    else{
        container.style.opacity = 10;
        startPage.style.opacity = 0;
        startPage.style.zIndex = -1;
        score.style.opacity = 10
        active = true;
        noOfRounds = rounds.value;

        let guessNo = Math.floor(Math.random()*2) + 1;
        playerNo = guessNo;
        if(guessNo == 1){
            name1.innerText = `${player1.value} (X)`;
            name1.style.backgroundColor = "rgb(45, 40, 40)";
            name2.innerText = `${player2.value} (0)`;
        }
        else{
            name1.innerText = `${player1.value} (0)`;
            name2.innerText = `${player2.value} (X)`;
            name2.style.backgroundColor = "rgb(45, 40, 40)";
        }

        Rounds.innerText = `${rounds.value}`;
    }
})

for(let i=0; i<9; i++){
    box[i].addEventListener('click', function(){
        if(arr[i] != -1){
            return;
        }
        if(!active) return;
        box[i].innerText = ch;
        arr[i] = ch;
        count++;
        if(checkForWin()){
            active = false;
            noOfRounds--;
            Rounds.innerText = `${noOfRounds}`;
            St.style.opacity = 1;
            St.style.zIndex = 50;
            ch = 'X';
            if(playerNo == 1){
                s1++;
                St.children[0].innerText = `${player1.value} won`;
                score1.innerText = s1;
            }
            else {
                s2++;
                St.children[0].innerText = `${player2.value} won`;
                score2.innerText = s2;
            }
        }
        else{
            if(count == 9){
                active = false;
                St.style.opacity = 1;
                St.style.zIndex = 50;
                ch = 'X';
                St.children[0].innerText = `Draw!`;
                noOfRounds--;
                Rounds.innerText = `${noOfRounds}`;
            }

            if(ch == 'X'){
                ch = '0';
                if(playerNo == 1){
                    name2.style.backgroundColor = "rgb(45, 40, 40)";
                    name1.style.backgroundColor = "black";
                    playerNo = 2;
                }
                else{
                    name1.style.backgroundColor = "rgb(45, 40, 40)";
                    name2.style.backgroundColor = "black";
                    playerNo = 1;
                }
            }
            else{
                ch = 'X'
                if(playerNo == 1){
                    name2.style.backgroundColor = "rgb(45, 40, 40)";
                    name1.style.backgroundColor = "black";
                    playerNo = 2;
                }
                else{
                    name1.style.backgroundColor = "rgb(45, 40, 40)";
                    name2.style.backgroundColor = "black";
                    playerNo = 1;
                }
            };
        }
        
    })
}

let arr = [-1,-1,-1,-1,-1,-1,-1,-1,-1];

function checkForWin(){
    if((arr[0] == '0' && arr[1] == '0' && arr[2] == '0') 
    || (arr[3] == '0' && arr[4] == '0' && arr[5] == '0') 
    || (arr[6] == '0' && arr[7] == '0' && arr[8] == '0') 
    || (arr[0] == '0' && arr[3] == '0' && arr[6] == '0') 
    || (arr[1] == '0' && arr[4] == '0' && arr[7] == '0') 
    || (arr[2] == '0' && arr[5] == '0' && arr[8] == '0') 
    || (arr[0] == '0' && arr[4] == '0' && arr[8] == '0') 
    || (arr[2] == '0' && arr[4] == '0' && arr[6] == '0')){
        return true;
    }
    
    else if((arr[0] == 'X' && arr[1] == 'X' && arr[2] == 'X') 
        || (arr[3] == 'X' && arr[4] == 'X' && arr[5] == 'X') 
        || (arr[6] == 'X' && arr[7] == 'X' && arr[8] == 'X') 
        || (arr[0] == 'X' && arr[3] == 'X' && arr[6] == 'X') 
        || (arr[1] == 'X' && arr[4] == 'X' && arr[7] == 'X') 
        || (arr[2] == 'X' && arr[5] == 'X' && arr[8] == 'X') 
        || (arr[0] == 'X' && arr[4] == 'X' && arr[8] == 'X') 
        || (arr[2] == 'X' && arr[4] == 'X' && arr[6] == 'X')){
        return true;
    }

    return false;
}

St.children[1].addEventListener('click', function(){

    if(noOfRounds == 0){
        if(s1 > s2){
            active = false;
            St.style.opacity = 1;
            St.style.zIndex = 50;
            St.children[0].innerHTML = `${player1.value} : ${s1} , ${player2.value} : ${s2} <br> ${player1.value} WON`;
        }
        else if(s1 < s2){
            active = false;
            St.style.opacity = 1;
            St.style.zIndex = 50;
            St.children[0].innerHTML = `${player1.value} : ${s1} , ${player2.value} : ${s2} <br> ${player2.value} WON`;
        }
        else{
            active = false;
            St.style.opacity = 1;
            St.style.zIndex = 50;
            St.children[0].innerHTML = `Draw between ${player1.value} and ${player2.value}`;
        }
        noOfRounds--;
        return;
    }

    if(noOfRounds == -1){
        container.style.opacity = 0;
        startPage.style.opacity = 10;
        startPage.style.zIndex = 8;
        score.style.opacity = 0;
        active = false;
        s1 = 0;
        s2 = 0;
        count = 0;
        playerNo = 1;
        ch = 'X';
        score1.innerText = s1;
        score2.innerText = s2;
        St.style.opacity = 0;
        St.style.zIndex = -1;
        for(let i=0; i<9; i++){
            box[i].innerText = '';
        }
        arr = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
        name1.style.backgroundColor = "black";
        name2.style.backgroundColor = "black";
        player1.value = '';
        player2.value = '';
        rounds.value = '';
        return;
    }


    active = true;
    St.style.opacity = 0;
    St.style.zIndex = -1;
    ch = 'X';
    for(let i=0; i<9; i++){
        box[i].innerText = '';
    }

    arr = [-1,-1,-1,-1,-1,-1,-1,-1,-1];
    count = 0;

    let guessNo = Math.floor(Math.random()*2) + 1;
        playerNo = guessNo;
        if(guessNo == 1){
            name1.innerText = `${player1.value} (X)`;
            name1.style.backgroundColor = "rgb(45, 40, 40)";
            name2.style.backgroundColor = "black";
            name2.innerText = `${player2.value} (0)`;
        }
        else{
            name1.innerText = `${player1.value} (0)`;
            name2.innerText = `${player2.value} (X)`;
            name1.style.backgroundColor = "black";
            name2.style.backgroundColor = "rgb(45, 40, 40)";
        }

        Rounds.innerText = `${noOfRounds}`;
})