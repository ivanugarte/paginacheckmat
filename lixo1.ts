// subject
class Person {
  name= '';
  constructor(name){
    this.name = name;
    this.reciveFood = this.reciveFood.bind(this);
  }
  public reciveFood(command){
    console.log(this.name.toString(), ': reciveFood:', command.title);
  }
}

// publisher
class Kitchen {

  observers = [];

  public subscribe(observerFunction) {
    console.log('new Kitchen subscriber');
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
 
  public newKitchen(title) {
    let command = {
      type: 'new-kitchen',
      title: title
    }

    this.notifyAll(command);
  }
}  
   