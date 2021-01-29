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
   

<a className="navbar-brand" href="#"></a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="collapsibleNavbar">
  <ul className="navbar-nav ml-auto">
    <li className="nav-item ">
      <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#about">Quien somos</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#service">Instructores</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#agency">sucursales</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#contact">contacto</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#whatsapp">whatsapp</a>
    </li>
  </ul>
</div>