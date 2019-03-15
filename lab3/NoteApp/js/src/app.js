class Note {
    constructor(title) {
      this.title = title;
      this.element = this.createElement(title);
    }
    
    createElement(title){
      let newNote = document.createElement('div');
      
      a.addEventListener('click', this.remove.bind(newNote));
      console.log("create element function called");
      return newNote;
    }
    
    add(){
      // HINT🤩
      // this function should append the note to the screen somehow
    }
    
    saveToStorage(){
      // HINT🤩
      // localStorage only supports strings, not arrays
      // if you want to store arrays, look at JSON.parse and JSON.stringify
    }
    
    remove(){
      // HINT🤩 the meaning of 'this' was set by bind() in the createElement function
      // in this function, 'this' will refer to the current note element
    } 
  }
  
  class App {
    constructor() {
      console.log("👊🏼 The Constructor!");
    
      // HINT🤩
      // clicking the button should work
      // pressing the enter key should also work
      this.btnAdd = document.querySelector("btnAddNote");
      //this.btnAdd.eventlistener("click", this.bind(this));
      this.loadNotesFromStorage();
    }
    
    loadNotesFromStorage() {
        console.log("code went to 'load notes from storage' function");
      // HINT🤩
      // load all notes from storage here and add them to the screen
      // something like note.add() in a loop would be nice
    }
     
    createNote(e){
      // this function should create a new note by using the Note() class
      let newNote = new Note(title); //ADD title between parentheses
      
      // HINT🤩
      // note.add();
      // note.saveToStorage();
      // this.reset();
    }
    
    reset(){
      // this function should reset the form 
    }
    
  }
  
  let app = new App();