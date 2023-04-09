class Todo {
    job: string
    day: string
    constructor(job: string, day: string) {
     this.job= job
     this.day= day
    }
 }
 class TodoList {
    list: Todo[]
    constructor(){
        this.list= []
    }
     addTodoList(note :Todo, ){
        const index = this.list.findIndex(item => item.day === note.day);
        const index1 = this.list.findIndex(item => item.job === note.job);
        if (index != -1 && index1!= -1) {
            console.log("same day same job");
            
        }else {
            this.list.push(note,)
        }
        

        
     }
 }
  
  let note1= new Todo('sex','22/03/2023')
 let note2 = new Todo('sex','24/03/2023')
 let note3 = new Todo('play game','23/03/2023')
 let note4= new Todo('home work','22/03/2023')
 let note5= new Todo('home work','22/03/2023')

 let notelist= new TodoList()
 notelist.addTodoList(note2)
 notelist.addTodoList(note1)
 notelist.addTodoList(note3)
 notelist.addTodoList(note4)
 notelist.addTodoList(note5)

 console.log(notelist);
 
  
 

 