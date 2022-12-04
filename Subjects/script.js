function check(){
    
  var userPicks=  document.getElementById("userPicks").value;

        var computerPicks=parseInt((Math.random()*3)+1);
      document.getElementById("computerPicks").value=computerPicks;

alert(userPicks);
alert(computerPicks);

  
//user picks rock,paper,scissor
 if((userPicks=="paper" && computerPicks == 1)|| 
        (userPicks=="rock" && computerPicks ==3)||
        (userPicks=="scissor" && computerPicks==2)){
        alert("win");
    }
    

//user picks paper,rock,scissor
else if((userPicks=="paper" && computerPicks==3)||
        (userPicks == "rock" && computerPicks==2) ||
        (userPicks == "scissor" && computerPicks==1)){
        alert("lose");
    }
   
    else if((userPicks=="paper" && computerPicks==2)||
    (userPicks == "rock" && computerPicks==1) ||
    (userPicks == "scissor" && computerPicks==3)){
    alert("draw");
}

    else{
        alert("invalid attempt");
    }


}    rock=1
    paper=2
    scissor=3


