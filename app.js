const response = document.querySelector('.response');
const input = document.getElementById('input');
const btnClear = document.getElementById('clear-table');
const tableBody = document.getElementById("table-body");
let data = sessionStorage;

 function assignResponse(){
     const responses = [
          'It is certain', 'It is decidedly so', 'Reply hazy try again', 'Cannot predict now',
          'Do not count on it', 'My sources say no', 'Outlook not so good', 'Signs point to yes'
      ];
      const randomNumber = Math.floor(Math.random() * responses.length);
      const eightBall = responses[randomNumber];
      response.textContent = eightBall;
      response.classList.remove('hidden');
      return eightBall;
 }

 function createRow(key, value){
     const row = document.createElement("tr");
     const keyCell = document.createElement("td");
     const valueCell = document.createElement("td");
     keyCell.appendChild(document.createTextNode(key));
     valueCell.appendChild(document.createTextNode(value));
     row.appendChild(keyCell);
     row.appendChild(valueCell);

     tableBody.appendChild(row);
 }

 function setStorage(key, value){
     data.setItem(key, value);
     createRow(key,value);
 }

 function printTable(){
     if (typeof(Storage) !== "undefined") {
          const keys = Object.keys(data);
          keys.forEach(function(key) {
               createRow(key, data.getItem(key));
          });
     } else {
          console.log("Sorry, your browser does not support Web Storage...");
     }
 }

 function initBtn(){
     input.addEventListener('keydown',(event)=>{
          if (event.key === 'Enter' && input.value !==''){
               event.preventDefault();
               const value = assignResponse();
               setStorage(input.value,value);
               input.value='';               
          }
     })
     btnClear.addEventListener('click', function(){
          sessionStorage.clear();
          tableBody.innerHTML = '';
          // alert("Your data has been deleted succesfully");         
     });
 }

initBtn();
printTable();




