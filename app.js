let counter=0;
const value=document.getElementById('value');
// document.querySelector('.btn decrease').addEventListener('click',()=>{
//     counter=counter-1;
//     value.textContent=counter;
// });

// document.querySelector('.btn reset').addEventListener('click',()=>{

// });

// document.querySelector('.btn increase').addEventListener('click',()=>{

// });

const buttons=document.querySelectorAll('.btn');

buttons.forEach(function(btn){
    btn.addEventListener('click',(element)=>{
        const styles=element.currentTarget.classList;
        if(styles.contains('decrease')){
            counter--;
        }
        else if(styles.contains('increase')){
            counter++;
        }
        else{
            counter=0;
        }
        value.textContent=counter;
        if(counter<0){
            value.style.color="Red";
        }
        else if( counter>0){
            value.style.color="Green";
        }
        else{
            value.style.color="Black";
        }
    });
    
});
