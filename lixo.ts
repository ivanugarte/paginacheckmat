// subject
class Person {
  name = '';
  constructor(name){
    this.name = name;
    this.reciveMagazine = this.reciveMagazine.bind(this);
  }
  public reciveMagazine(command){
    console.log(this.name.toString(), ': reciveMagazine: ', command.title);
  }
}
-
// publisher
class Magazine {
  
  observers = [];
  
  public subscribe(observerFunction) {
    console.log('new Magazine subscriber');
    this.observers.push(observerFunction);
  }
  
  public unsubscribe(observerFunction) {
    this.observers = this.observers.filter(observer => observer instanceof observerFunction !== true);
  }
  
  public notifyAll(command) {
    this.observers.forEach(observerFunction => {
      observerFunction(command);
    });
  }
  
  public newMagazine(title) {
    let command = {
      type: 'new-magazine',
      title: title
    }
    
    this.notifyAll(command);
  }
  }
console.clear();

// create 2 new instance of Person
let person1 = new Person('Ivan');
console.log('Se ha creado una nueva instancia de ', person1.name);
let person2 = new Person('Thiago');
console.log('Se ha creado una nueva instancia de ', person2.name);

// create new instance of Magazine
let magazine = new Magazine();

magazine.subscribe(person1.reciveMagazine);
console.log(person1.name, ' se suscribe a recibir nuevas ediciones de Magazine');


console.log('Se emitirá la primera edición');
magazine.newMagazine('1° Revista Cañamo: Todos los pitos vuelan');

magazine.subscribe(person2.reciveMagazine);
console.log(person2.name, ' se suscribe a recibir nuevas ediciones de Magazine');

console.log('Se emitirá la segunda edición');
magazine.newMagazine('2° Revista Cañamo: En brasil fuman "Cabezas de negos"');