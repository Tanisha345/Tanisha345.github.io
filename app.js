let boxes= document.querySelectorAll(".box");
let btn1= document.querySelector("#resetbtn");
let winmsg=document.querySelector("#win-msg");
let btn2=document.querySelector("#newbtn");

let turnO=true;
const winningpatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


boxes.forEach((box)=>{
    box.addEventListener("click", ()=>
    {
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwinner();
    });
});


const newgame=()=>{
    turnO=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

    winmsg.innerText="";
}

const showwinner=(first)=>{
    winmsg.innerText=`Congratulations, ${first}  is winner`;
    for(let box of boxes){
        box.disabled=true;
    }
}

const checkwinner=()=>{
    for(let pattern of winningpatterns){
        let first=boxes[pattern[0]].innerText;
        let second=boxes[pattern[1]].innerText;
        let third=boxes[pattern[2]].innerText;
        if(first!="" && first==second && second==third){
            showwinner(first);
        }
    }
}


btn1.addEventListener("click", newgame);

    btn2.addEventListener("click", newgame);

