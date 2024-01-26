const response = document.querySelector('.response');
const input = document.getElementById('input');
const btn = document.getElementById('btn');


 function assignResponse(){
  
      let randomNumber = Math.floor(Math.random() *7)
      let eightBall = '';
   
      switch (randomNumber){
         case 1:
         eightBall = 'It is certain'
         break;
         case 2:
         eightBall = 'It is decidedly so'
         break;
         case 3:
         eightBall = 'Reply hazy try again'
         break;
         case 4:
         eightBall = 'Cannot predict now'
         break;
         case 5:
         eightBall = 'Do not count on it'
         break;
         case 6:
         eightBall = 'My sources say no'
         break;
         case 7:
         eightBall = 'Outlook not so good'
        
         break;
         case 0:
         eightBall = 'Signs point to yes'
         break;
       }

      response.innerHTML = eightBall;
      response.classList.remove('hidden');

 }

    input.addEventListener('keydown',(event)=>{
      if (event.key === 'Enter'){
         event.preventDefault();
         assignResponse();
      }
   })




