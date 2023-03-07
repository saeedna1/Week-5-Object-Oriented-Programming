// Week 5 Menu App

class Grocery {
    constructor(name, quantity, price) {
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
    describe() {
      return `${this.name} grocery ${this.quantity} gorcery ${this.price},`;
    }
}

class Item {
  constructor(name) {
    this.name = name;
    this.groceries = [];
  }
 
  addGrocery(name) {
    if (Grocery instanceof Grocery) {
      this.groceries.push(Grocery);
    } else {
      throw new Error (`You can only add an instance of Grocery. Argument is not a Grocery ${Grocery}`);
    }
  }
  describe () {
    return `${this.name} has ${this.groceries.length} groceries`
  }
}

class Menu { 
  constructor() {
    this.items  = [];
    this.selectedItem = null;
  }
  
  start() {
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
      switch (selection) {
        case '1':
          this.createItem();
          break;
        case '2':
          this.viewItem();
          break;
        case '3':
          this.deleteItem();
          break;  
        case '4':
          this.displayItems();
          break;      
        default:
          selection = 0;           
      }
      selection = this.showMainMenuOptions();
    }
    alert ('GoodBye!');
  }

  showGroceryMainMenuOptions(itemInfo) {
    return prompt (`
      0) back
      1) create grocery
      2) delete grocery
      ----------------
      ${itemInfo}
    `);
  }

  showMainMenuOptions() {
    return prompt (`
      Welcome to Grocery Menu!

      0) exit
      1) create new item
      2) view item
      3) delete item 
      4) display all items
   `);
  }
  
  displayItems() {
    let itemString = '';
    for (let i = 0; i < this.items.length; i++) {
      itemString += i + ') ' + this.items[i].name + '\n';
    }
    alert(itemString);
  }
  
  createItem() {
    let name = prompt('Enter name to create new item:');
    this.items.push(new Item(name));
    console.log(this.items[0].name);
  }
  
  viewItem() {
    let index = (prompt('Enter the index of item you wish to view:'));
    if (index > -1 && index < this.items.length) {
      this.selectedItem = this.items[index];
      let description = ' ' 
      console.log('Enter to view items:')
      for (let i = 0;  i < this.selectedItem.groceries.length;  i++) {
        description += i +  ')'  + this.selectedItem.groceries[i].name  +  ' - '  + this.selectedItem.groceries[i].quantity  + ' - ' + this.selectedItem.groceries[i].price + '\n';
      }
      let selection = this.showGroceryMainMenuOptions(description);
      switch(selection){
        case '1':
          this.createGrocery();
          break;
        case '2':
          this.deleteGrocery();  
      }              
    }
  }
     
  deleteItem() {
    let index = prompt('Enter the index of the item you wish to delete:');
    if (index > -1  && index < this.items.length) {
      this.items.splice(index, 1);
    }
  }

  createGrocery() {
    let name = prompt('Enter name for new grocery:');
    let quantity = prompt('Enter quantity for new groceery:');
    let price = prompt('Enter price:');
    this.selectedItem.groceries.push(new Grocery(name,quantity,price));
  }

  deleteGrocery() {
    let index = prompt('Enter the index of the grocery you wish to delete:');
    if (index > -1 && index < this.selectedItem.groceries.length) {
      this.selectedItem.groceries.splice(index, 1);
    }
  }
}
let menu = new Menu();   
menu.start(); 