let model = 'x';
let title = document.getElementsByClassName('title')[0];

let squares = [];
function end(num1 , num2 , num3){
    document.getElementById('item' + num1).style.background = 'green';
    document.getElementById('item' + num2).style.background = 'green';
    document.getElementById('item' + num3).style.background = 'green';
    title.innerHTML = `winner ${squares[num1]}`;
setTimeout(function(){ location.reload()},3000);
setInterval(function(){ title.innerHTML +='.'} , 700)
}

function winner(){
    for(let  i = 1 ;  i < 10 ; i++){
         squares[i] = document.getElementById('item' + i).innerHTML;
    }

    
    if(squares[1] == squares[2] && squares[2] == squares[3]   &&  squares[1] != '') {
        end(1,2,3)
      
}
if(squares[4] == squares[5] && squares[5] == squares[6]   &&  squares[6] != '') {
    end(4,5,6)
}
if(squares[7] == squares[8] && squares[8] == squares[9]   &&  squares[7] != '') {
    end(7,8,9)

}


if(squares[1] == squares[4] && squares[4] == squares[7]   &&  squares[1] != '') {
    end(1,4,7)

}

if(squares[2] == squares[5] && squares[5] == squares[7]   &&  squares[2] != '') {
    end(2,5,8)

}
if(squares[3] == squares[6] && squares[6] == squares[7]   &&  squares[7] != '') {
    end(3,6,7)

}







if(squares[1] == squares[5] && squares[5] == squares[9]   &&  squares[1] != '') {
    end(1,5,9)

}

if(squares[3] == squares[5] && squares[5] == squares[7]   &&  squares[7] != '') {
    end(3,5,7)

}





}

















function game(id){
    let element = document.getElementById(id)
    
    
    
    if( model == 'x' &&  element.innerHTML == ""){
        element.innerHTML = 'x'
        model = 'o'
        title.innerHTML = "now order o  "
    }
    if( model == 'o' &&  element.innerHTML == ""){
        element.innerHTML = 'o'
        title.innerHTML = "now order x  "

        model = 'x'
    }

    winner()

}
