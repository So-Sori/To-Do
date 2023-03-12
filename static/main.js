const input = document.querySelector('.task');
const btnAdd = document.querySelector('.btn-add');
let ul = document.querySelector('ul');
let empty = document.querySelector('.empty');

btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    if(input.value !== ''){
        const text = input.value;
    
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.textContent = text;
    
        li.appendChild(p);
        li.appendChild(DeleteBtn());
        ul.appendChild(li);
    
        input.value = ''
        empty.style.display = 'none';
    }
});
function DeleteBtn(){
    const btnDelete = document.createElement('button')
    btnDelete.textContent =  'X';
    btnDelete.className = 'btn-delete';

    btnDelete.addEventListener('click',(e) => {
        const item = e.target.parentElement;
        ul.removeChild(item)   

        const items = document.querySelectorAll('li');
    
        if(items.length === 0){
            empty.style.display = 'block';
        }
    })
    return btnDelete
    
}

// Pomodoro
let textMin = document.querySelector('#tiempo');
let textSeconds = document.querySelector('#segundos');

let workTime = document.getElementById('work').value;
let breakTime = document.getElementById('break').value;
breakTime = parseInt(breakTime);
workTime = parseInt(workTime);

// window.onload = () => {
let currentTime = workTime;
textMin.textContent = currentTime;
let seconds = 0;
console.log("start",workTime,currentTime,textMin,textSeconds);

    function timer(){
        if(currentTime > 0 || seconds > 0){

            if(seconds === 0){
                seconds = 59;
                currentTime--;
                console.log("Seconds = 59",workTime,currentTime,textMin,textSeconds);
            }  
            
            else{
                seconds--;
            }
            
            textMin.textContent = currentTime;
            textSeconds.textContent = seconds;
            
            if(seconds < 10 && seconds >= 0){
                textSeconds.textContent = `0${seconds}`;
                seconds--;
                console.log(" s < 10",workTime,currentTime,textMin,textSeconds);
            }

        setTimeout(timer,1000);
        console.log("after setTimeOut",workTime,currentTime,textMin,textSeconds)
        } 
        else{
            console.log("Time Out");
        }
    }
        
    //     if(currentTime > 0 && seconds > 0){

    //         if(seconds == 0){
    //             seconds = 59;
    //             breakTime--;
    //         }else{
    //             seconds--;
    //             } 

    //         textMin.textContent = breakTime;
    //         textSeconds.textContent = seconds;
            

    //     setTimeout(timer,1000);
    //     } 
    //     else{
    //         console.log("Time To Work");
    //     }

    // }

    // timer()
// };







//minutos prederteminados
// let five_min = document.getElementById('five');
// let ten = document.getElementById('ten');
// let fifteen_min = document.getElementById('fifteen');
// let thirty_min = document.getElementById('thirty');
// let forty_five_min = document.getElementById('forty-five');
// let others_min = document.getElementById('other');
