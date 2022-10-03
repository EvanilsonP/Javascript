class Person {
    constructor(name) {
        this._name = name
    }

    get name() {
        return this._name
    }

    set name(value) {
        this._name = value;
    }
}

let person = new Person('Evanilson')
person.name = 'Tchutchuco'

console.log(person.name)

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    read() {
        return `Estou lendo ${this.title}`
    }
}

class ITbook extends Book {
    constructor(title, author, pages, technology) {
      super(title, author, pages);
      this.technology = technology;
    }
}

let itBOOK = new ITbook('Algoritmos para viver', 'Brian', 985, 'Algoritmos');

console.log(itBOOK)