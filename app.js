let notes = document.querySelector('#notes');
let text = document.querySelector('#text');
let create = document.querySelector('#create');
let menu = document.getElementById('menu');


let save_btn = document.getElementById('save');

// save_btn.addEventListener('click', function(){
//    let text_new_item = document.getElementById('item').value;
   
//    let li = document.createElement('li');
// 	li.textContent = text_new_item;
//    notes.appendChild(li);
// })


create.addEventListener('click', function() {
      let text_new_item = document.getElementById('item').value;
      
      let li = document.createElement('li');
	   li.textContent = 'Запись';
      li.dataset.info = text_new_item;
      notes.appendChild(li);
      document.getElementById('item').value='';

      li.addEventListener('click', function(){
         document.getElementById('item').value= this.dataset.info;
         if('click' == false){
            li.style.background = "#ffffff";
         }else{
            li.style.background = "#AA0000";
         }
      })
});

// let texts = ['1', '2', '3'];

// function initNotes() {
//    texts.map(text => createNote(notes, text))
// }

// create.addEventListener('click', function() {
//    const newNote = createNote(notes, prompt('Введите название'))   
//    notes.appendChild(newNote);
// });

// function createNote(notes, value) {
// 	let li = document.createElement('li');
// 	li.textContent = value;
//    notes.appendChild(li);
// 	return li;
// }

// initNotes()