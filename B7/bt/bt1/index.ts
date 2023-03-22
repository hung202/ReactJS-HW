 class Note {
    title: string
    content: string
    constructor(title: string, content: string) {
     this.title= title
     this.content= content
    }
 }
 class NoteList{
    list: Note[]
    constructor(){
        this.list= []
    }
     addNoteList(note :Note, ){
        this.list.push(note,)
     }
 }
  let note1= new Note('1','2')
 let note2 = new Note('2','3')
 let notelist= new NoteList()
 notelist.addNoteList(note2)
 notelist.addNoteList(note1)
 console.log(notelist);
 

 